// Tab: tag/label non-interaktif — tanpa React Aria.

/**
 * Tab — generated from Figma ("Tab") by Figma to React Aria.
 * Primitif: Tag/Label (<span>) — non-interaktif.
 * Variant Figma → props: width.
 * Warna, radius, padding, tinggi & font dibaca langsung dari tiap variant
 * (nilai mentah Figma — mapping ke design token langkah berikutnya).
 */
const BASE_STYLE = {
  background: 'transparent',
  border: 'none',
  color: '#182230',
  borderRadius: '0px',
  padding: '0px 0px 0px 0px',
  fontSize: '12px',
  height: '40px',
};

const HIERARCHY_STYLES = {

};

const SIZE_STYLES = {

};

export function Tab({ width = 'Max', children, style, ...props }) {
  const overrides = {

  };
  return (
    <span
      style={{
        ...BASE_STYLE,
        ...overrides,
        boxSizing: 'border-box',
        fontWeight: 600,
        fontFamily: 'Nunito, sans-serif',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0px',
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
