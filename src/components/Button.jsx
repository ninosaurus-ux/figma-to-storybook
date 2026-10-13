import { Button as AriaButton } from 'react-aria-components';

/**
 * Button — generated from Figma ("Buttons/Button") by Figma to React Aria.
 * Variant Figma → props: hierarchy, size, icon.
 * Warna, radius, padding, tinggi & font dibaca langsung dari tiap variant
 * (nilai mentah Figma — mapping ke design token langkah berikutnya).
 */
const HIERARCHY_STYLES = {
  'Primary': { background: '#1352BF', border: '1px solid #1352BF', color: '#FFFFFF' },
  'Secondary color': { background: '#FFFFFF', border: '1px solid #1352BF', color: '#1352BF' },
  'Link color': { background: 'transparent', border: 'none', color: '#1352BF' },
  'Link gray': { background: 'transparent', border: 'none', color: '#182230' },
  'Tertiary color': { background: 'transparent', border: 'none', color: '#1352BF' },
  'Tertiary gray': { background: 'transparent', border: 'none', color: '#182230' },
  'Secondary gray': { background: '#FFFFFF', border: '1px solid #E4E7EC', color: '#101828' },
};

const SIZE_STYLES = {
  'md': { padding: '16px 16px 16px 16px', fontSize: '14px', borderRadius: '8px', height: '44px' },
  'lg': { padding: '0px 20px 0px 20px', fontSize: '16px', borderRadius: '10px', height: '52px' },
  'xl': { padding: '0px 24px 0px 24px', fontSize: '18px', borderRadius: '10px', height: '60px' },
  '2xl': { padding: '0px 24px 0px 24px', fontSize: '18px', borderRadius: '10px', height: '68px' },
  'sm': { padding: '8px 16px 8px 16px', fontSize: '12px', borderRadius: '8px', height: '36px' },
  'xs': { padding: '4px 8px 4px 8px', fontSize: '12px', borderRadius: '8px' },
};

const DEFAULT_RADIUS = '8px';

export function Button({ hierarchy = 'Primary', size = 'md', icon = 'Default', children, style, ...props }) {
  const h = HIERARCHY_STYLES[hierarchy] || {};
  const sz = SIZE_STYLES[size] || {};
  return (
    <AriaButton
      style={({ isFocusVisible, isDisabled }) => ({
        background: h.background,
        border: h.border,
        color: h.color,
        borderRadius: sz.borderRadius || DEFAULT_RADIUS,
        padding: sz.padding,
        fontSize: sz.fontSize,
        height: sz.height,
        boxSizing: 'border-box',
        fontWeight: 700,
        fontFamily: 'Nunito', sans-serif,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
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
