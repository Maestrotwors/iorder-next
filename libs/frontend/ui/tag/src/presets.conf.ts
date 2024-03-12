import { TagPresetsEnum, TagPresetsType } from './presets.enum';

interface TagPresetInterface {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
}

export const presetsArray: Map<TagPresetsType, TagPresetInterface> = new Map([
  [
    TagPresetsEnum.Default,
    {
      backgroundColor: '#fafafa',
      textColor: '#000000d9',
      borderColor: '#d9d9d9',
    },
  ],
  [
    TagPresetsEnum.Gold,
    {
      backgroundColor: '#fffbe6',
      textColor: '#d48806',
      borderColor: '#ffe58f',
    },
  ],
  [
    TagPresetsEnum.Green,
    {
      backgroundColor: '#000000',
      textColor: '#FFFFFF',
      borderColor: '#FFFFFF',
    },
  ],
  [
    TagPresetsEnum.Blue,
    {
      backgroundColor: '#e6f7ff',
      textColor: '#096dd9',
      borderColor: '#91d5ff',
    },
  ],
]);
