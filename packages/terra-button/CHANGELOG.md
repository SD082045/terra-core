# Changelog

## Unreleased

## 3.65.0 - (March 1, 2023)

* Removed
  * Removed `iconType` prop from button.

* Changed
  * Updated jest snapshots for button changes.

## 3.64.0 - (February 16, 2023)

* Changed
  * Fixed aria-label bug.

## 3.63.0 - (February 15, 2023)

* Changed
  * Updated wdio screenshots due to functional-testing upgrade.
* Added
  * Added `IconTypes` for terra-button.
  * Added support for decorative icon buttons.

## 3.62.0 - (December 7, 2022)

* Changed
  * Minor dependency version bump

## 3.61.0 - (February 15, 2022)

* Changed
  * Added `button` role to anchor butttons.

## 3.60.1 - (December 14, 2021)

* Changed
  * TabIndex is honored unless the button is disabled.

## 3.60.0 - (November 2, 2021)

* Changed
  * Migrate doc to terra-core-docs.

## 3.59.0 - (September 21, 2021)

* Changed
  * Updated WDIO Screenshots due to webpack-config-terra sass upgrade.

## 3.58.0 - (August 25, 2021)

* Changed
  * Minor dependency version bump

## 3.57.0 - (June 22, 2021)

* Changed
  * Minor dependency version bump

## 3.56.0 - (June 8, 2021)

* Changed
  * Updated `keycode-js` from `v2.0.1` to `v3.1.0`.

## 3.55.0 - (April 13, 2021)

* Changed
  * Minor dependency version bump

## 3.54.0 - (April 6, 2021)

* Changed
  * Removed unnecessary `wdio.conf.js` file
  * Upgrade tests to terra-functional-testing and WebDriverIO v6
  * Updated Jest command

## 3.53.0 - (February 2, 2021)

* Changed
  * Minor dependency version bump

## 3.52.0 - (January 5, 2021)

* Fixed
 * Fixed broken links in documentation.

## 3.51.0 - (December 8, 2020)

* Changed
  * Minor dependency version bump

## 3.50.0 - (November 17, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

## 3.49.0 - (November 10, 2020)

* Fixed
  * Fixed focus styles issue after re-enabling a disabled button.

## 3.48.0 - (October 27, 2020)

* Changed
  * Minor dependency version bump

## 3.47.0 - (August 18, 2020)

* Changed
  * Remove wdio tests and screenshots for checking hover style.

## 3.46.0 - (August 6, 2020)

* Changed
  * Minor dependency version bump

## 3.45.0 - (August 4, 2020)

* Changed
  * Minor dependency version bump

## 3.44.0 - (July 29, 2020)

* Changed
  * Update changelog formatting

## 3.43.0 - (July 7, 2020)

* Changed
  * updated `master` references to `main`.

## 3.42.0 - (June 11, 2020)

* Changed
  * Updated wdio test to support testing against firefox

## 3.41.0 - (June 9, 2020)

* Changed
  * Update wdio test configuration to use root wdio config

## 3.40.0 - (June 2, 2020)

* Fixed
  * Fixed button not losing `focus` and `active` styles when made disabled via user interaction.

## 3.39.0 - (May 19, 2020)

* Changed
  * Minor dependency version bump

## 3.38.0 - (May 5, 2020)

* Added
  * Added an interaction media query to apply `hover` styles only on non-touch devices.

## 3.37.0 - (April 28, 2020)

* Changed
  * Removed "View Component Source Code" from docs in favour of source code badge
* Added
  * Added clinical-lowlight-theme wdio screenshots

## 3.36.0 - (April 22, 2020)

* Fixed
  * Converted terra-theme-context from a peer depenency to a dependency.

## 3.35.0 - (April 22, 2020)

* Changed
  * Apply themes by context and directly include packaged themes.
  * Updated docs for documentation link
  * Removed extra lines from README

## 3.34.0 - (March 31, 2020)

* Fixed
  * Fixed long press enabling click focus styles.
  * Fixed button not getting focus after closing of modal.

## 3.33.0 - (March 10, 2020)

* Changed
  * Minor dependency version bump

## 3.32.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

## 3.31.0 - (February 4, 2020)

* Changed
  * Update docs to use mdx syntax.

## 3.30.0 - (January 28, 2020)

* Changed
  * Minor dependency version bump

## 3.29.0 - (January 7, 2020)

* Added
  * Button border-color on hover is now themeable.

* Removed
  * Removed yarn reference in docs

## 3.28.0 - (December 10, 2019)

* Fixed
  * Set focus on button when clicked on Firefox, Safari, and IE.

* Added
  * Added Theme variables for disabled styles of button.

## 3.27.0 - (December 3, 2019)

* Added
  * Added orion-fusion-theme and generated the respective reference wdio screenshots.

## 3.26.0 - (October 30, 2019)

* Changed
  * Inline SVG aligned for IE and wdio screenshots updated by adding `--terra-button-compact-min-height` variable and updating its value.

* Fixed
  * Fixed lint warnings for multiple empty lines

## 3.25.0 - (October 3, 2019)

* Changed
  * Minor dependency version bump

## 3.24.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.

## 3.23.0 - (September 6, 2019)

* Added
  * Props table markdown file import added to doc site page

## 3.22.0 - (September 3, 2019)

* Changed
  * Updated the 'keycode-js' version from '^1.0.4' to '^2.0.1'.

## 3.21.0 - (August 21, 2019)

* Changed
  * Import for package version from package.json added to doc page
  * Added comments for ESlint v6
  * Cleaned up imports in examples and test files

## 3.20.0 - (August 14, 2019)

* Fixed
  * Fixed Button not showing focus styles when programmatically focused

* Changed
  * Update tests for dev-site v6
  * updated package.json test scripts

## 3.19.0 - (July 30, 2019)

* Changed
  * Minor dependency version bump

## 3.18.0 - (July 24, 2019)

* Changed
  * Minor dependency version bump

## 3.17.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies

## 3.16.0  - (July 11, 2019)

* Changed
  * Update tests to use `Terra.describeViewports` for setting viewports

## 3.15.0 - (June 28, 2019)

* Added
  * Moved v2 Upgrade guide that existed in the wiki to the upgrade guide doc

* Changed
  * Removed all inline styles from Dev-site components and implemented the same styles using external css.

## 3.14.0 - (June 18, 2019)

* Added
  * Added missing WDIO screenshots

## 3.13.1 - (June 12, 2019)

* Changed
  * Reverted change to adjust Button CSS to better line up icons with text

## 3.13.0 - (June 11, 2019)

* Removed
  * Removed node_modules from .npmignore

* Changed
  * Adjusted Button CSS to better line up icons with text
  * Made required updates to consume terra-toolkit v5 and terra-dev-site v5

## 3.12.0 - (May 1, 2019)

* Added
  * Added new `ghost` variant
  * Added `compact` variant docsite examples

* Changed
  * Minor dependency version bump
  * Updated WDIO tests to use themeCombinationOfCustomProperties instead of themeEachCustomProperty

* Fixed
  * Use the custom `aria-label` if explicitly provided, otherwise use `text` as its fallback value for Utility button and icon-only buttons.

## 3.11.0 - (April 16, 2019)

* Changed
  * Minor dependency version bump

## 3.10.0 - (April 9, 2019)

* Added
  * Added the native `title` attribute as a prop

## 3.9.0 - (April 2, 2019)

* Fixed
  * Reset default margin in Safari.

## 3.8.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 3.7.0 - (March 21, 2019)

* Changed
  * Replaced local keyCode values with keycode-js npm package

## 3.6.0 - (February 26, 2019)

* Changed
  * Minor dependency version bump

## 3.5.0 - (February 12, 2019)

* Changed
  * Minor dependency version bump

## 3.4.0 - (February 5, 2019)

* Changed
  * Minor dependency version bump

## 3.3.0 - (January 26, 2019)

* Changed
  * Minor dependency version bump

## 3.2.0 - (January 22, 2019)

* Changed
  * Minor dependency version bump

## 3.1.0 - (January 22, 2019)

* Changed
  * Minor dependency version bump

## 3.0.0 - (January 8, 2019)

* Changed
  * Applied styles to wrap long words in buttons
  * Updated theme variables

## 2.32.0 - (January 2, 2019)

* Changed
  * Minor dependency version bump

## 2.31.1 - (November 20, 2018)

* Changed
  * Patch dependency version bump

## 2.31.0 - (November 19, 2018)

* Changed
  * Minor dependency version bump

## 2.30.0 - (November 13, 2018)

* Changed
  * Minor dependency version bump

## 2.29.0 - (November 9, 2018)

* Changed
  * Minor dependency version bump

## 2.28.0 - (October 24, 2018)

* Changed
  * Minor dependency version bump

## 2.27.0 - (October 16, 2018)

* Changed
  * Minor dependency version bump

## 2.26.0 - (October 8, 2018)

* Fixed
  * Fixed the Button component wrapping to center text

* Changed
  * Updated component feature links in README

## 2.25.0 - (October 2, 2018)

* Added
  * Exports for button types and variants added

## 2.24.0 - (September 25, 2018)

* Changed
  * Minor dependency version bump

## 2.23.1 - (September 6, 2018)

* Changed
  * Patch dependency version bump

## 2.23.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 2.22.0 - (September 4, 2018)

* Changed
  * Minor dependency version bump

## 2.21.0 - (August 29, 2018)

* Changed
  * Minor dependency version bump

## 2.20.0 - (August 21, 2018)

* Added
  * Added refCallback prop to the Button component

## 2.19.0 - (August 1, 2018)

* Changed
  * Minor dependency version bump
  * Updated test pages with icons to use a `terra-icon`

* Fixed
  * Fixed the Compact Button test page to display a compact button

## 2.18.0 - (July 19, 2018)

* Changed
  * Add .module extension to SCSS file(s)

## 2.17.0 - (July 17, 2018)

* Changed
  * Minor dependency version bump
  * Removed unused state mouseWasClicked key

## 2.16.0 - (July 10, 2018)

* Changed
  * Minor dependency version bump

## 2.15.0 - (June 28, 2018)

* Changed
  * Minor dependency version bump

* Added
  * Added change log to the documentation on terra-dev-site

## 2.14.0 - (June 22, 2018)

* Changed
  * Moved terra-base from dependency to peerDependency

## 2.13.0 - (June 12, 2018)

* Changed
  * Updated "test:jest" script to work on windows.

## 2.12.0 - (May 30, 2018)

* Changed
  * Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

## 2.11.0 - (May 23, 2018)

* Changed
  * Minor dependency version bump

## 2.10.0 - (May 16, 2018)

* Changed
  * Minor dependency version bump

## 2.9.0 - (May 9, 2018)

* Changed
  * Minor dependency version bump

## 2.8.0 - (May 2, 2018)

* Changed
  * Minor dependency version bump

## 2.7.0 - (April 20, 2018)

* Changed
  * Minor dependency version bump

## 2.6.0 - (April 15, 2018)

* Changed
  * Minor dependency version bump

## 2.5.0 - (April 5, 2018)

* Changed
  * Minor dependency version bump

## 2.4.0 - (March 30, 2018)

* Changed
  * Minor dependency version bump

## 2.3.0 - (March 14, 2018)

* Changed
  * Create a flattened SVG css selector.

## 2.2.0 - (March 6, 2018)

* Removed
  * Removed props-table script from package.json

## 2.1.0 - (February 26, 2018)

* Changed
  * Added font-size theming variable to Button component
  * Corrected `DE-EMPHSASIS` button variant typo

## 2.0.1 - (February 13, 2018)

* Changed
  * Updated peerDependencies

## 2.0.0 - (February 23, 2018)

* Changed
  * Updated button types and variants syntax in docs

## 2.0.0 - (February 12, 2018)

* Changed
  * Updated to use React 16
  * The `text` prop is now required to help improve accessibility
  * Button is now a class-base component and not a functional component, to allow a ref callback

* Added
  * The following props have been added: `isIconOnly`, `onBlur`, `onFocus`, `onKeyDown`, and `onKeyUp`
  * The following variants have been added: `neutral`,  `emphasis`, `de-emphasis`, `utility` and `action` per UX guidance

* Removed
  * The size prop has been removed per UX guidance
  * The `primary`, `secondary`,  and `link` variants have been removed per UX guidance
  * The children prop has been removed

## 1.14.0 - (November 28, 2017)

* Changed
  * Corrected typo in `terra-button` css comment.

## 1.13.0 - (November 16, 2017)

* Changed
  * Removed unnecessary `font-family` rule.

## 1.12.0 - (October 31, 2017)

* Changed
  * Added space between icons and text

## 1.11.0 - (October 6, 2017)

* Changed
  * Minor dependency version bump

## 1.10.0 - (September 26, 2017)

* Removed
  * Remove stylelint-disable selector-class-pattern

## 1.9.0 - (September 19, 2017)

* Changed
  * Minor dependency version bump

## 1.8.0 - (September 12, 2017)

* Changed
  * Minor dependency version bump

## 1.7.0 - (September 7, 2017)

* Changed
  * Minor dependency version bump

## 1.6.0 - (September 5, 2017)

* Changed
  * Update nightwatch tests and test scripts.

## 1.5.0 - (August 31, 2017)

* Changed
  * Minor dependency version bump

## 1.4.0 - (August 15, 2017)

* Changed
  * Switched CSS custom properties usage to inline fallback syntax

## 1.3.0 - (August 8, 2017)

* Changed
  * Minor dependency version bump

## 1.2.0 - (August 1, 2017)

* Removed
  * Removed terra-mixins

## 1.1.0 - (July 18, 2017)

* Changed
  * Converted component to use CSS modules
  * Converted SCSS variables to CSS custom properties for theming
  * Normalized CSS custom properties naming
  * Updated nightwatch test scripts

* Removed
  * Removed nightwatch.config file

## 1.0.0 - (June 28, 2017)

Initial stable release
