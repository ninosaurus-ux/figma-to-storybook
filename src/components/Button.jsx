import { Button as AriaButton } from 'react-aria-components';
const Icon0 = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5" cy="5" r="4" fill="white"/>
</svg>
);

const Icon1 = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_15_140" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="6" y="4" width="8" height="12">
<path d="M11.9108 4.4108C12.2362 4.08536 12.7637 4.08536 13.0892 4.4108C13.4146 4.73623 13.4146 5.26374 13.0892 5.58918L8.67837 9.99999L13.0892 14.4108C13.4146 14.7362 13.4146 15.2637 13.0892 15.5892C12.7637 15.9146 12.2362 15.9146 11.9108 15.5892L6.9108 10.5892C6.58536 10.2637 6.58536 9.73623 6.9108 9.4108L11.9108 4.4108Z" fill="black"/>
</mask>
<g mask="url(#mask0_15_140)">
<path d="M0 0H20V20H0V0Z" fill="white"/>
</g>
</svg>
);

const Icon2 = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_15_143" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="4" y="6" width="12" height="8">
<path d="M14.4108 6.9108C14.7362 6.58536 15.2637 6.58536 15.5892 6.9108C15.9146 7.23623 15.9146 7.76374 15.5892 8.08918L10.5892 13.0892C10.2637 13.4146 9.73623 13.4146 9.4108 13.0892L4.4108 8.08918C4.08536 7.76374 4.08536 7.23623 4.4108 6.9108C4.73623 6.58536 5.26374 6.58536 5.58918 6.9108L9.99999 11.3216L14.4108 6.9108Z" fill="black"/>
</mask>
<g mask="url(#mask0_15_143)">
<path d="M0 0H20V20H0V0Z" fill="white"/>
</g>
</svg>
);

const Icon3 = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_15_272" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="6" y="4" width="8" height="12">
<path d="M11.9108 4.4108C12.2363 4.08536 12.7638 4.08536 13.0892 4.4108C13.4146 4.73623 13.4146 5.26374 13.0892 5.58918L8.6784 9.99999L13.0892 14.4108C13.4146 14.7362 13.4146 15.2637 13.0892 15.5892C12.7638 15.9146 12.2363 15.9146 11.9108 15.5892L6.91083 10.5892C6.58539 10.2637 6.58539 9.73623 6.91083 9.4108L11.9108 4.4108Z" fill="black"/>
</mask>
<g mask="url(#mask0_15_272)">
<path d="M0 0H20V20H0V0Z" fill="white"/>
</g>
</svg>
);
/**
 * Button — generated from Figma ("Buttons/Button") by Figma to React Aria.
 * Primitif: Button (React Aria) — interaktif.
 * Variant Figma → props: hierarchy, size, icon.
 * Warna, radius, padding, tinggi & font dibaca langsung dari tiap variant
 * (nilai mentah Figma — mapping ke design token langkah berikutnya).
 */
const ICONS = {
  'Dot leading': {
    left: (<>
      <Icon0 />
    </>),
    right: (<></>),
  },
  'Default': {
    left: (<>
      <Icon1 />
    </>),
    right: (<>
      <Icon2 />
    </>),
  },
  'Only': {
    left: (<>
      <Icon3 />
    </>),
    right: (<></>),
  },
};

const BASE_STYLE = {
  background: '#1352BF',
  border: '1px solid #1352BF',
  color: '#FFFFFF',
  borderRadius: '8px',
  padding: '16px 16px 16px 16px',
  fontSize: '14px',
  height: '44px',
};

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

export function Button({ hierarchy = 'Primary', size = 'md', icon = 'Default', children, style, ...props }) {
  const overrides = {
    ...(HIERARCHY_STYLES[hierarchy] || {}),
    ...(SIZE_STYLES[size] || {}),
  };
  return (
    <AriaButton
      style={({ isFocusVisible, isDisabled }) => ({
        ...BASE_STYLE,
        ...overrides,
        boxSizing: 'border-box',
        fontWeight: 700,
        fontFamily: 'Nunito, sans-serif',
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
      {ICONS[icon]?.left}
      {children}
      {ICONS[icon]?.right}
    </AriaButton>
  );
}
