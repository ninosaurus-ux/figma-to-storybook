import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

// Daftarkan penerjemah format Tokens Studio.
// excludeParentKeys: true = nama set (global/semantic) TIDAK ikut
// jadi bagian nama token. Tanpa ini, jadinya --global-color-brand-500.
await register(StyleDictionary, { excludeParentKeys: true });

export default {
  // Bahan mentah: file hasil Push dari plugin
  source: ['tokens.json'],
  // Abaikan $themes & $metadata (milik plugin, bukan token)
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      // color.brand.500 -> --color-brand-500 (kebab-case)
      transforms: ['name/kebab'],
      buildPath: 'dist/',
      files: [{ destination: 'variables.css', format: 'css/variables' }],
    },
  },
};
