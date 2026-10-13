import { Button as AriaButton } from 'react-aria-components';

/**
 * Button — generated from Figma ("Buttons/Button") by Figma to React Aria.
 * Variant Figma → props: hierarchy, size, icon.
 */
const TONE_STYLES = {
  primary: { background: 'var(--color-background-primary)', color: 'var(--color-text-on-brand)', border: '1px solid transparent' },
  secondary: { background: 'var(--color-background-secondary)', color: 'var(--color-text-primary)', border: '1px solid var(--color-border-strong)' },
  tertiary: { background: 'transparent', color: 'var(--color-text-primary)', border: '1px solid transparent' },
  link: { background: 'transparent', color: 'var(--color-background-primary)', border: '1px solid transparent' },
  gray: { background: 'var(--color-background-secondary)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border-subtle)' },
};
// Nilai variant Hierarchy (dari Figma) → tone di atas.
const HIERARCHY_TONE = {
  'Primary': 'primary',
  'Secondary color': 'secondary',
  'Link color': 'link',
  'Link gray': 'link',
  'Tertiary color': 'tertiary',
  'Tertiary gray': 'tertiary',
  'Secondary gray': 'gray',
};
const SIZES = {
  xs: { padding: 'var(--spacing-1) var(--spacing-2)', fontSize: 'var(--font-size-sm)' },
  sm: { padding: 'var(--spacing-1) var(--spacing-3)', fontSize: 'var(--font-size-sm)' },
  md: { padding: 'var(--spacing-2) var(--spacing-4)', fontSize: 'var(--font-size-md)' },
  lg: { padding: 'var(--spacing-3) var(--spacing-5)', fontSize: 'var(--font-size-lg)' },
  xl: { padding: 'var(--spacing-4) var(--spacing-6)', fontSize: 'var(--font-size-lg)' },
  '2xl': { padding: 'var(--spacing-5) var(--spacing-6)', fontSize: 'var(--font-size-xl)' },
};

export function Button({ hierarchy = 'Primary', size = 'md', icon = 'Default', children, style, ...props }) {
  const tone = TONE_STYLES[HIERARCHY_TONE[hierarchy] || 'primary'];
  const sizeStyle = SIZES[size] || SIZES.md;
  return (
    <AriaButton
      style={({ isFocusVisible, isDisabled }) => ({
        ...tone,
        ...sizeStyle,
        borderRadius: 'var(--radius-md)',
        fontWeight: 'var(--font-weight-medium)',
        fontFamily: 'inherit',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--spacing-2)',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.5 : 1,
        outline: isFocusVisible ? '2px solid var(--color-background-primary)' : 'none',
        outlineOffset: '2px',
        ...style,
      })}
      {...props}
    >
      {icon === 'Dot leading' && <span aria-hidden="true">•</span>}
      {children}
    </AriaButton>
  );
}
