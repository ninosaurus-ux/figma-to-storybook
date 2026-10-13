import { Button as AriaButton } from 'react-aria-components';

/**
 * Button — generated from Figma ("Buttons/Button") by Figma to React Aria.
 * Variant Figma → props: hierarchy, size, icon.
 * Warna, radius, padding & font-size dibaca langsung dari tiap variant
 * (nilai mentah Figma — mapping ke design token langkah berikutnya).
 */
const HIERARCHY_STYLES = {
  'Primary': { background: '#1352BF', border: '1px solid #1352BF', color: '#FFFFFF', borderRadius: '8px' },
  'Secondary color': { background: '#FFFFFF', border: '1px solid #1352BF', color: '#1352BF', borderRadius: '8px' },
  'Link color': { background: '#E5E7EB', border: '1px solid #E5E7EB', color: '#1352BF', borderRadius: '0px' },
  'Link gray': { background: '#E5E7EB', border: '1px solid #E5E7EB', color: '#182230', borderRadius: '0px' },
  'Tertiary color': { background: '#E5E7EB', border: '1px solid #E5E7EB', color: '#1352BF', borderRadius: '8px' },
  'Tertiary gray': { background: '#E5E7EB', border: '1px solid #E5E7EB', color: '#182230', borderRadius: '8px' },
  'Secondary gray': { background: '#FFFFFF', border: '1px solid #E4E7EC', color: '#101828', borderRadius: '8px' },
};

const SIZE_STYLES = {
  'md': { padding: '16px 16px 16px 16px', fontSize: '14px' },
  'lg': { padding: '0px 20px 0px 20px', fontSize: '16px' },
  'xl': { padding: '0px 24px 0px 24px', fontSize: '18px' },
  '2xl': { padding: '0px 24px 0px 24px', fontSize: '18px' },
  'sm': { padding: '8px 16px 8px 16px', fontSize: '12px' },
  'xs': { padding: '4px 8px 4px 8px', fontSize: '12px' },
};

export function Button({ hierarchy = 'Primary', size = 'md', icon = 'Default', children, style, ...props }) {
  const h = HIERARCHY_STYLES[hierarchy] || {};
  const sz = SIZE_STYLES[size] || {};
  return (
    <AriaButton
      style={({ isFocusVisible, isDisabled }) => ({
        background: h.background,
        border: h.border,
        color: h.color,
        borderRadius: h.borderRadius,
        padding: sz.padding,
        fontSize: sz.fontSize,
        fontWeight: 500,
        fontFamily: 'inherit',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.5 : 1,
        outline: isFocusVisible ? '2px solid #0D99FF' : 'none',
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
