import { Button as AriaButton } from 'react-aria-components';

/**
 * Button — template komponen untuk plugin Figma.
 * Styling 100% dari token Figma (via CSS variables),
 * perilaku + aksesibilitas (keyboard, focus, ARIA) dari React Aria.
 */
export function Button({ tone = 'primary', children, style, ...props }) {
  const tones = {
    primary: {
      background: 'var(--color-background-primary)',
      color: 'var(--color-text-on-brand)',
      border: '1px solid transparent',
    },
    secondary: {
      background: 'var(--color-background-secondary)',
      color: 'var(--color-text-primary)',
      border: '1px solid var(--color-border-strong)',
    },
  };

  return (
    <AriaButton
      style={({ isFocusVisible, isDisabled }) => ({
        ...tones[tone],
        padding: 'var(--spacing-2) var(--spacing-4)',
        borderRadius: 'var(--radius-md)',
        fontSize: 'var(--font-size-md)',
        fontWeight: 'var(--font-weight-medium)',
        fontFamily: 'inherit',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.5 : 1,
        outline: isFocusVisible ? '2px solid var(--color-background-primary)' : 'none',
        outlineOffset: '2px',
        ...style,
      })}
      {...props}
    >
      {children}
    </AriaButton>
  );
}
