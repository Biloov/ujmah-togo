---
name: Sincere Guidance
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#464652'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#777683'
  outline-variant: '#c7c5d4'
  surface-tint: '#5153b3'
  primary: '#15137a'
  on-primary: '#ffffff'
  primary-container: '#2e2f8f'
  on-primary-container: '#9c9eff'
  inverse-primary: '#c0c1ff'
  secondary: '#755b00'
  on-secondary: '#ffffff'
  secondary-container: '#fccc38'
  on-secondary-container: '#6f5600'
  tertiary: '#421d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#622f00'
  on-tertiary-container: '#ff881b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#393a9a'
  secondary-fixed: '#ffdf90'
  secondary-fixed-dim: '#f0c12c'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#584400'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb784'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#713700'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system is built on the principles of **Minimalism** infused with spiritual intentionality. It prioritizes sobriety and modesty, ensuring that the humanitarian mission remains the focal point without unnecessary visual noise. The aesthetic is "quietly professional"—it avoids the aggressive urgency of typical non-profit branding in favor of a calm, trustworthy presence that reflects the Islamic value of *Ikhlas* (sincerity).

The visual language uses expansive whitespace to create "room to breathe," reflecting a sense of peace and clarity. Interactions are deliberate and soft, moving away from high-energy animations toward subtle transitions that respect the user's focus.

## Colors

The palette is anchored by **Deep Purple**, used to convey dignity, wisdom, and the depth of the organization's commitment. **Yellow** and **Orange** serve as "warmth" accents, representing the hope and vitality of the communities served; they should be used sparingly for primary actions and highlights.

- **Primary (Deep Purple):** Used for navigation, primary headers, and core brand moments.
- **Accents (Yellow/Orange):** Used for call-to-action buttons and critical status indicators.
- **Neutrals:** A rich **Black** (#1A1A1A) is used for text to ensure high legibility, while **White** serves as the primary canvas to maintain a sense of purity and openness.

## Typography

This design system utilizes a dual-sans-serif approach to balance modern professionalism with approachable warmth. 

- **Manrope** is used for headlines. Its geometric yet slightly softened construction provides a contemporary, structured feel that remains friendly.
- **Inter** is used for all body copy and UI labels. It was chosen for its exceptional legibility and neutral character, ensuring that information is communicated clearly and without distraction.

Type scales are generous, favoring larger line heights to improve readability and contribute to the overall "calm" layout.

## Layout & Spacing

The system follows a **Fixed Grid** model for desktop (12 columns, 1140px max-width) and a fluid model for mobile. A strict 8px spatial rhythm is applied to all components.

Information density is intentionally kept low. Sections are separated by large vertical margins (`xl`) to allow the eye to rest. Content should be grouped logically with clear hierarchical separation using the `lg` spacing token, preventing the "cluttered" look common in NGO portals.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. This design system avoids harsh borders or heavy dropshadows.

- **Surface Levels:** The base background is White. Secondary containers (like cards) use a very subtle Deep Purple tint at 2-4% opacity to distinguish themselves without creating hard edges.
- **Shadows:** Use extra-diffused, low-opacity shadows (Opacity: 5-8%) with a slight Y-axis offset to suggest objects are resting gently on a surface. 
- **Depth through Imagery:** Depth is also achieved by layering text over calm, high-quality photography of environments or geometric patterns, using soft overlays to maintain contrast.

## Shapes

In alignment with the modest and approachable nature of the brand, all interactive elements feature **Rounded Corners (8px)**. 

- **Containers & Cards:** Use the 8px (`rounded-md`) standard.
- **Buttons:** Follow the 8px standard for a professional look, avoiding full pill shapes which can feel too "casual" or "tech-heavy."
- **Patterns:** Visual interest is generated through subtle Islamic geometric patterns (e.g., eight-pointed stars or interlaced lines). These should be executed as low-contrast vector strokes or watermarks in the background.

## Components

### Buttons
Primary buttons use a solid Deep Purple background with White text. Secondary buttons use an outline of Deep Purple with a subtle hover state. Orange is reserved for "Donate" or high-priority conversion actions only.

### Cards
Cards are clean with no borders; they use the ambient shadow and 8px corner radius. They are the primary vehicle for displaying "projects" or "appeals."

### Photography & Imagery
Strict adherence to "No Faces" and "No 3D Illustrations." Focus on architectural details of mosques, serene landscapes, or hands engaged in work (as long as the face is not the focus). Images should have a consistent desaturated or slightly cooled temperature to align with the Deep Purple primary color.

### Inputs & Forms
Input fields use a light gray background with a 1px Deep Purple border appearing only on focus. This creates a "quiet" form experience that feels less demanding of the user.

### Progress Indicators
For fundraising goals, use a simple linear progress bar with the Orange accent to provide a sense of movement and hope against a Deep Purple track.