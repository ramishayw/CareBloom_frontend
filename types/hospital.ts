export interface HospitalSelectionParams {
  province?: string;
  district?: string;
  mohRegion?: string;
  hospital?: string;
  hospitalId?: string;
}

export interface DropdownItem {
  label: string;
  value: string;
}

export interface HospitalData {
  provinces: DropdownItem[];
  districts: { [key: string]: DropdownItem[] };
  mohRegions: { [key: string]: DropdownItem[] };
  hospitals: { [key: string]: DropdownItem[] };
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_API_URL?: string;
    }
  }
}
