# @strawberry/design

Design system specifications and implementations. These might include:
- Tokens
- React components
- CSS (variables and resets)

## Thoughts on module tooling

This module was scaffolded with Vite's `react-ts` template but we don't really need a dedicated frontend. Ideally we can use Storybook to develop and test components in isolation and then also use it for documentation. *However* Vite is way faster than Storybook (ATM) so there might be a case to keep it around and use it for development or documentation instead. Another idea is to use Next.js- it gives us more control over a static documentation site, can be easily deployed, and is fairly fast to develop in. Storybook has some pretty cool tools for exporting typescript interfaces and automatically generating interactive props- so for now we will stick with that.