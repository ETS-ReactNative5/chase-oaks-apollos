/* Add your custom theme definitions below. Anything that is supported in UI-Kit Theme can be
 overridden and/or customized here! */

/* Base colors.
 * These get used by theme types (see /types directory) to color
 * specific parts of the interface. For more control on how certain
 * elements are colored, go there. The next level of control comes
 * on a per-component basis with "overrides"
 */
const lightColors = {
  primary: '#413A60',
  secondary: '#E74E39',
  tertiary: '#E74E39',
  // an additional color for Chase Oaks is #333E48
};

const darkColors = {
  primary: '#7573B5',
  secondary: '#E74E39',
  tertiary: '#E74E39',
};

/* Base Typography sizing and fonts.
 * To control speicfic styles used on different type components (like H1, H2, etc), see "overrides"
 */
const typography = {
  sans: {
    regular: {
      default: 'HelveticaNeue',
      italic: 'HelveticaNeue-Italic',
    },
    medium: {
      default: 'HelveticaNeue-Medium',
      italic: 'HelveticaNeue-MediumItalic',
    },
    bold: {
      default: 'HelveticaNeue-Bold',
      italic: 'HelveticaNeue-BoldItalic',
    },
    black: {
      default: 'HelveticaNeue-CondensedBold',
    },
  },
  // serif: {
  //   regular: {
  //     default: 'DroidSerif',
  //     italic: 'DroidSerif-Italic',
  //   },
  //   bold: {
  //     default: 'DroidSerif-Bold',
  //     italic: 'DroidSerif-BoldItalic',
  //   },
  // },
  ui: {
    regular: 'System',
  },
};

/* Responsive breakpoints */
// export const breakpoints = {};

/* Base sizing units. These are used to scale
 * space, and size components relatively to one another.
 */
// export const sizing = {};

/* Base alpha values. These are used to keep transparent values across the app consistant */
// export const alpha = {};

/* Base overlays. These are used as configuration for LinearGradients across the app */
// const overlays = ({ colors: themeColors }) => ({
//   'background-gradient': ({ colors: customColors }) => ({
//     colors: customColors || [
//       themeColors.background.screen,
//       themeColors.background.screen,
//     ],
//     // default props from `react-native-linear-gradient`
//     start: { x: 0.5, y: 0.0 },
//     end: { x: 0.5, y: 1.0 },
//     locations: null,
//   }),
// });

/* Overrides allow you to override the styles of any component styled using the `styled` HOC. You
 * can also override the props of any component using the `withTheme` HOC. See examples below:
 * ```const StyledComponent = styled({ margin: 10, padding: 20 }, 'StyledComponent');
 *    const PropsComponent = withTheme(({ theme }) => ({ fill: theme.colors.primary }), 'PropsComponent');
 * ```
 * These componnents can have their styles/props overriden by including the following overrides:
 * ```{
 *   overides: {
 *     StyledComponent: {
 *       margin: 5,
 *       padding: 15,
 *     },
 *     // #protip: you even have access 👇to component props! This applies to style overrides too 💥
 *     PropsComponent: () => ({ theme, isActive }) => ({
 *       fill: isActive ? theme.colors.secondary : theme.colors.primary,
 *     }),
 *   },
 * }
 * ```
 */
// const overrides = {};

export default { lightColors, darkColors, typography };
