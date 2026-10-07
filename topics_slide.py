import os
import json
import re
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor

# Configuration
JS_FILE_PATH = "references.js"
THEME_PATH = "LEO_template.pptx"

GROUP_NAMES = {
    "BS": "Bachelor Seminar Topics",
    "BT": "Bachelor Thesis Topics",
    "MS": "Master Seminar Topics"
}

TRACK_COLORS = {
    "BS": "#8b5cf6",
    "BT": "#5979a6",
    "MS": "#10b981"
}

def hex_to_rgb(hex_str):
    hex_str = hex_str.lstrip('#')
    return RGBColor(*(int(hex_str[i:i+2], 16) for i in (0, 2, 4)))

def format_author_apa(author_str):
    """Converts BibTeX author string ('Last, First and Last, First') to APA style ('Last, F. & Last, F.')."""
    if not author_str:
        return ""
    authors = [a.strip() for a in author_str.split('and')]
    formatted_authors = []
    
    for author in authors:
        if ',' in author:
            parts = [p.strip() for p in author.split(',')]
            last_name = parts[0]
            first_names = parts[1].split()
            initials = " ".join([f"{name[0]}." for name in first_names if name])
            formatted_authors.append(f"{last_name}, {initials}")
        else:
            parts = author.split()
            if len(parts) > 1:
                last_name = parts[-1]
                first_names = parts[:-1]
                initials = " ".join([f"{name[0]}." for name in first_names if name])
                formatted_authors.append(f"{last_name}, {initials}")
            else:
                formatted_authors.append(author)
            
    if len(formatted_authors) == 1:
        return formatted_authors[0]
    elif len(formatted_authors) == 2:
        return f"{formatted_authors[0]} & {formatted_authors[1]}"
    else:
        return ", ".join(formatted_authors[:-1]) + f", & {formatted_authors[-1]}"

# Load presentation template safely
prs = None
if os.path.exists(THEME_PATH):
    try:
        prs = Presentation(THEME_PATH)
    except Exception:
        prs = Presentation()

if prs is None:
    prs = Presentation()

prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)

# Read references.js file
with open(JS_FILE_PATH, "r", encoding="utf-8") as f:
    js_content = f.read()

json_match = re.search(r"\{.*\}", js_content, re.DOTALL)
bib_data = json.loads(json_match.group(0))

CARDS_PER_SLIDE = 3

for group_code in ["BS", "BT", "MS"]:
    group_items = []
    for key, item in bib_data.items():
        if "note" in item and item["note"] and group_code in item.get("tracks", []):
            group_items.append(item)
            
    if not group_items:
        continue

    num_slides = (len(group_items) + CARDS_PER_SLIDE - 1) // CARDS_PER_SLIDE
    accent_rgb = hex_to_rgb(TRACK_COLORS.get(group_code, "#8b5cf6"))
    
    for slide_idx in range(num_slides):
        chunk = group_items[slide_idx * CARDS_PER_SLIDE : (slide_idx + 1) * CARDS_PER_SLIDE]
        
        layout_idx = 1 if len(prs.slide_layouts) > 1 else 0
        slide = prs.slides.add_slide(prs.slide_layouts[layout_idx])
        
        if len(slide.shapes.placeholders) > 1:
            content_shape = slide.shapes.placeholders[1]
            sp_elem = content_shape.element
            sp_elem.getparent().remove(sp_elem)
        
        if slide.shapes.title:
            title_shape = slide.shapes.title
            title_text = GROUP_NAMES.get(group_code, f"{group_code} Topics")
            if num_slides > 1:
                title_text += f" ({slide_idx + 1}/{num_slides})"
            title_shape.text = title_text
        
        left_margin, top_margin = Inches(0.8), Inches(1.8)
        card_width, gap = Inches(11.733), Inches(0.25)
        n_items = len(chunk)
        card_height = (Inches(5.0) - (gap * (n_items - 1))) / n_items
        
        for idx, item in enumerate(chunk):
            card_y = top_margin + idx * (card_height + gap)
            
            # Card Container Box
            card_rect = slide.shapes.add_shape(1, left_margin, card_y, card_width, card_height)
            card_rect.fill.solid()
            card_rect.fill.fore_color.rgb = RGBColor(248, 250, 252)
            card_rect.line.color.rgb = RGBColor(226, 232, 240)
            
            # Vertical Left Accent Stripe
            accent_stripe = slide.shapes.add_shape(1, left_margin, card_y, Inches(0.12), card_height)
            accent_stripe.fill.solid()
            accent_stripe.fill.fore_color.rgb = accent_rgb
            accent_stripe.line.fill.background()
            
            # Card Text Box
            tb = slide.shapes.add_textbox(left_margin + Inches(0.3), card_y + Inches(0.12), card_width - Inches(0.5), card_height - Inches(0.24))
            tf = tb.text_frame
            tf.word_wrap = True
            
            # 1. Research Question (Title Header)
            p_note = tf.paragraphs[0]
            p_note.text = f"{item['note'].strip()}"
            p_note.font.bold = True
            p_note.font.size = Pt(18)
            p_note.font.color.rgb = RGBColor(15, 23, 42)
            p_note.space_after = Pt(4)
            
            # 2. Formatted Citation (Slightly Smaller 13pt)
            authors_formatted = format_author_apa(item.get('author', ''))
            p_ref = tf.add_paragraph()
            p_ref.text = f"{authors_formatted} ({item['year']}). {item['title']}. {item['journal']}."
            p_ref.font.size = Pt(17)
            p_ref.font.color.rgb = RGBColor(71, 85, 105)

output_filename = "topics_leo_theme.pptx"
prs.save(output_filename)
print(f"[SUCCESS] Saved presentation to '{output_filename}'")