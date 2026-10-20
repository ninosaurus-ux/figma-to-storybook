import { Button as AriaButton } from 'react-aria-components';
const Icon0 = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_62_2818" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="5" y="3" width="6" height="10">
<path d="M9.52864 3.52864C9.78899 3.26829 10.211 3.26829 10.4714 3.52864C10.7317 3.78899 10.7317 4.211 10.4714 4.47135L6.94271 8L10.4714 11.5286C10.7317 11.789 10.7317 12.211 10.4714 12.4714C10.211 12.7317 9.78899 12.7317 9.52864 12.4714L5.52864 8.47135C5.26829 8.211 5.26829 7.78899 5.52864 7.52864L9.52864 3.52864Z" fill="black"/>
</mask>
<g mask="url(#mask0_62_2818)">
<path d="M0 0H16V16H0V0Z" fill="white"/>
</g>
</svg>
);

const Icon1 = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_62_2822" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="3" y="5" width="10" height="6">
<path d="M3.52864 6.47135C3.26829 6.211 3.26829 5.78899 3.52864 5.52864C3.78899 5.26829 4.211 5.26829 4.47135 5.52864L8 9.05729L11.5286 5.52864C11.789 5.26829 12.211 5.26829 12.4714 5.52864C12.7317 5.78899 12.7317 6.211 12.4714 6.47135L8.47135 10.4714C8.211 10.7317 7.78899 10.7317 7.52864 10.4714L3.52864 6.47135Z" fill="black"/>
</mask>
<g mask="url(#mask0_62_2822)">
<path d="M0 0H16V16H0V0Z" fill="white"/>
</g>
</svg>
);
/**
 * Button — generated from Figma ("Button") by Figma to React Aria.
 * Primitif: Button (React Aria) — interaktif.
 * Variant Figma → props: hierarchy, size.
 * Warna, radius, padding, tinggi & font dibaca langsung dari tiap variant
 * (nilai mentah Figma — mapping ke design token langkah berikutnya).
 */
const ICON_LEFT = (<>
      <Icon0 />
    </>);
const ICON_RIGHT = (<>
      <Icon1 />
    </>);

const BASE_STYLE = {
  background: '#1352BF',
  border: 'none',
  color: '#FFFFFF',
  borderRadius: '999px',
  padding: '8px 16px 8px 16px',
  fontSize: '14px',
  gap: '8px',
};

const HIERARCHY_STYLES = {
  'Default': { background: '#1352BF', border: 'none', color: '#FFFFFF' },
};

const SIZE_STYLES = {
  'sm': { padding: '8px 16px 8px 16px', fontSize: '14px', borderRadius: '999px' },
  'md': { padding: '12px 24px 12px 24px', fontSize: '16px', borderRadius: '999px' },
  'lg': { padding: '16px 32px 16px 32px', fontSize: '18px', borderRadius: '999px' },
};
const VARIANT_STYLES = {
  'sm|Default': {
    background: '#1352BF',
    border: 'none',
    color: '#FFFFFF',
    borderRadius: '999px',
    padding: '8px 16px 8px 16px',
    fontSize: '14px',
    gap: '8px',
  },
  'md|Default': {
    background: '#1352BF',
    border: 'none',
    color: '#FFFFFF',
    borderRadius: '999px',
    padding: '12px 24px 12px 24px',
    fontSize: '16px',
    gap: '8px',
  },
  'lg|Default': {
    background: '#F04438',
    border: 'none',
    color: '#FFFFFF',
    borderRadius: '999px',
    padding: '16px 32px 16px 32px',
    fontSize: '18px',
    gap: '8px',
  },
};


export function Button({ hierarchy = 'Default', size = 'md', children, style, ...props }) {
  const variantKey = `${size}|${hierarchy}`;
  const overrides = VARIANT_STYLES[variantKey] || {};
  return (
    <AriaButton
      style={({ isFocusVisible, isDisabled }) => ({
        ...BASE_STYLE,
        ...overrides,
        boxSizing: 'border-box',
        fontWeight: 400,
        fontFamily: 'Inter, sans-serif',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.5 : 1,
        outline: isFocusVisible ? '2px solid #0D99FF' : 'none',
        outlineOffset: '2px',
        ...style,
      })}
      {...props}
    >
      {ICON_LEFT}
      {children}
      {ICON_RIGHT}
    </AriaButton>
  );
}
