---
name: "Shamel Events (based on Auri Studio)"
description: "Design tokens extracted from https://auristudio.com/ and applied to Shamel Events"
colors:
  primary: "#B82837"
  secondary: "#333333"
  tertiary: "#0000EE"
  surface: "#CCCCCC"
  on-surface: "#000000"
typography:
  text-1:
    fontFamily: "Raleway"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.2
  text-2:
    fontFamily: "Raleway"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 1.2
  text-3:
    fontFamily: "Raleway"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.2
  text-4:
    fontFamily: "Raleway"
    fontSize: "25px"
    fontWeight: 700
    lineHeight: 1.2
  text-5:
    fontFamily: "Raleway"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.6
  text-6:
    fontFamily: "Raleway"
    fontSize: "18px"
    fontWeight: 400
  text-7:
    fontFamily: "Raleway"
    fontSize: "16px"
    fontWeight: 400
  text-8:
    fontFamily: "Raleway"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.43
spacing:
  base: "4px"
rounded:
  sm: "4px"
components:
  button-observed:
    backgroundColor: "#E9E9E9"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: "10px"
  input-observed:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.secondary}"
    rounded: "{rounded.sm}"
    padding: "10px"
---

# Shamel Events — Design System

Brand language extracted from auristudio.com with Dembrandt and applied to
Shamel Events, an event management company for weddings, dinners, and other events.

## Colors
- **Primary** (#B82837): Brand red — accents, links, active states, hover colors.
- **Secondary** (#333333): Body text on light surfaces, input text.
- **On Surface** (#000000): Headings and primary text.
- **Surface** (#FFFFFF / #CCCCCC / #E9E9E9): Page background is white; #E9E9E9 is
  the default button surface; #CCCCCC is the input border; #333 and #F5F3F0-style
  neutrals are derived from the source palette.
- Accent links default to red (#B82837); black links hover to red.

## Typography
- Family: **Raleway** (fallbacks: Open Sans, Helvetica Neue, Helvetica, sans-serif).
- Headings: Raleway 700, line-height 1.2 — display 48px, h1 40px, h2 30px, h3 25px.
- Body: Raleway 400, line-height 1.6 — 22px lead, 18px body, 16px small, 14px caption.
- Buttons: 20px, weight 700, uppercase ("SUBMIT" observed on source site).

## Layout
- Spacing scale: 4px base grid (5, 10, 13, 14, 20, 100px common values).
- Section padding: 100px observed as the dominant rhythm value.
- Responsive breakpoints: 1024px, 650px, 480px (source: 1024, 651, 650, 485, 480, 400).

## Elevation & Depth
- Cards: `0 0 7px rgba(0, 0, 0, 0.1)` (observed).
- Modals/dark surfaces: `0 0 11px rgba(0, 0, 0, 0.5)` (observed).

## Shapes
- Border radius: 4px on buttons, inputs, and cards.

## Components
- **Buttons**: 4px radius, background #E9E9E9, text #000000, padding 10px,
  700 weight, uppercase; 0.3s ease transitions; hover lifts to brand red.
- **Inputs**: 1px solid #CCCCCC, 4px radius, 10px padding, white background,
  #333 text; focus shifts border to the red family.

## Motion
- Durations: 0.1s–0.5s; dominant 0.2s, ease-in-out and ease-out.
- Buttons transition 0.3s ease.

<!-- dembrandt v0.33.0 -->
