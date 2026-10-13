import { Button as AriaButton } from 'react-aria-components';

/**
 * Tab — generated from Figma ("Tab") by Figma to React Aria.
 * Variant Figma → props: width.
 * Warna, radius, padding, tinggi & font dibaca langsung dari tiap variant
 * (nilai mentah Figma — mapping ke design token langkah berikutnya).
 */
const HIERARCHY_STYLES = {

};

const SIZE_STYLES = {

};

const DEFAULT_RADIUS = '0px';

export function Tab({ width = 'Max', children, style, ...props }) {
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
        fontWeight: 600,
        fontFamily: 'Nunito, sans-serif',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0px',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.5 : 1,
        outline: isFocusVisible ? '2px solid #0D99FF' : 'none',
        outlineOffset: '2px',
        ...style,
      })}
      {...props}
    >
      {children}
    </AriaButton>
  );
}
