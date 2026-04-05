# Component Map

## Layout
Responsibility:
Defines the global page structure (header, main, footer).

Inputs:
None

Outputs:
Page layout structure

Dependencies:
Header, Main, Footer


## Header
Responsibility:
Display site navigation and branding.

Inputs:
Navigation items

Outputs:
Navigation UI

Dependencies:
Logo, NavLinks


## NavLinks
Responsibility:
Group and layout navigation items.

Inputs:
List of links

Outputs:
Navigation list

Dependencies:
NavItem


## NavItem
Responsibility:
Render a single navigation link.

Inputs:
Label, URL

Outputs:
Anchor element

Dependencies:
Link


## Hero
Responsibility:
Present main value proposition and primary call to action.

Inputs:
Title, subtitle, CTA text

Outputs:
Hero section UI

Dependencies:
Headline, Subheadline, CTAGroup


## CTAGroup
Responsibility:
Group primary and secondary actions.

Inputs:
Buttons

Outputs:
Button layout

Dependencies:
Button


## ProjectsSection
Responsibility:
Display list of projects.

Inputs:
Projects data

Outputs:
Projects grid

Dependencies:
ProjectCard


## ProjectCard
Responsibility:
Display individual project information.

Inputs:
Title, description, image, link

Outputs:
Card UI

Dependencies:
Image, Text, Button


## AboutSection
Responsibility:
Describe the developer.

Inputs:
Text, image

Outputs:
About layout

Dependencies:
TextBlock, ImageBlock


## Footer
Responsibility:
Display secondary navigation and social links.

Inputs:
Links, social media

Outputs:
Footer UI

Dependencies:
FooterLinks, SocialLinks


## Button
Responsibility:
Trigger an action or navigation.

Inputs:
Label, type

Outputs:
Clickable element

Dependencies:
None