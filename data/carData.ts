export interface Driver {
  number: number;
  name: string;
  role: string;
  country: string;
}

export interface SpecificationItem {
  label: string;
  value: string;
  detail?: string;
  isRegulatory?: boolean;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface EngineeringTheme {
  title: string;
  code: string;
  description: string;
  highlights: string[];
}

export interface AerodynamicComponent {
  title: string;
  classification: string;
  focus: string;
  description: string;
  specs: string[];
}

export interface PowertrainFeature {
  title: string;
  metric: string;
  unit: string;
  subtext: string;
  description: string;
}

export const CAR_DATA = {
  creator: {
    name: 'G.GOKUL KRISHNAN',
    brand: 'GREYVENZA',
    instagramUrl: 'https://www.instagram.com/greyvenza?dlrf=MTNkN3JpYzZtMzlmNw==',
    driveDownloadUrl: 'https://drive.google.com/drive/folders/1AyiuNLF_-QwA1IkX-IIFMkVbSSwZQwzT?usp=sharing',
  },

  identity: {
    designation: 'RB22',
    fullName: 'Oracle Red Bull Racing RB22',
    season: '2026',
    teamName: 'Oracle Red Bull Racing',
    base: 'Milton Keynes, United Kingdom',
    powertrainBrand: 'Red Bull Ford Powertrains',
    liveryType: '2026 Dark Championship Livery',
  },

  drivers: [
    {
      number: 1,
      name: 'Max Verstappen',
      role: 'Lead Race Driver',
      country: 'Netherlands',
    },
    {
      number: 6,
      name: 'Isack Hadjar',
      role: 'Race Driver',
      country: 'France',
    },
  ] as Driver[],

  navigation: [
    { id: 'machine', label: 'MACHINE', href: '#machine' },
    { id: 'overview', label: 'ENGINEERING', href: '#overview' },
    { id: 'aerodynamics', label: 'AERODYNAMICS', href: '#aerodynamics' },
    { id: 'powertrain', label: 'POWERTRAIN', href: '#powertrain' },
    { id: 'specifications', label: 'SPECS', href: '#specifications' },
  ] as NavigationItem[],

  engineeringOverview: {
    headline: 'PRECISION IS NOT AN OPTION.',
    subheading:
      'Continuous development and uncompromising performance at every millimetre of the RB22.',
    themes: [
      {
        title: 'Active Aerodynamics',
        code: 'AERO-26',
        description:
          'Dual-state active surface geometry engineered to slash straight-line drag while delivering instantaneous downforce in high-speed complexes.',
        highlights: [
          'Variable incidence front flaps',
          'Low-drag active rear wing',
          'Underfloor Venturi suction tunnels',
        ],
      },
      {
        title: 'Powertrain Integration',
        code: 'PU-FORD',
        description:
          'Developed with Ford to achieve direct packaging parity between 1.6L internal combustion and the high-output 350 kW MGU-K battery unit.',
        highlights: [
          '350 kW electric boost deployment',
          'Drop-in 100% sustainable blend',
          'Near 50/50 power split balance',
        ],
      },
      {
        title: 'Driver Interface',
        code: 'CHASSIS-01',
        description:
          'A stripped, high-ergonomics cockpit delivering maximum steering feedback and instantaneous telemetry access under extreme lateral loads.',
        highlights: [
          'Ultra-rigid survival monocoque',
          'Hydraulic high-precision steering',
          'Titanium Halo safety structure',
        ],
      },
    ] as EngineeringTheme[],
  },

  technicalSpecifications: [
    {
      label: 'CHASSIS',
      value: 'RB22',
      detail: 'In-house carbon-composite monocoque',
      isRegulatory: false,
    },
    {
      label: 'POWER UNIT',
      value: 'Red Bull Ford',
      detail: 'Hybrid propulsion system',
      isRegulatory: false,
    },
    {
      label: 'SEASON',
      value: '2026',
      detail: 'FIA Formula One World Championship',
      isRegulatory: false,
    },
    {
      label: 'DRIVERS',
      value: 'Verstappen / Hadjar',
      detail: 'Car #1 & Car #6',
      isRegulatory: false,
    },
    {
      label: 'ICE ENGINE',
      value: '1.6L V6 Turbo',
      detail: 'Single turbocharger, 90° V6',
      isRegulatory: true,
    },
    {
      label: 'ELECTRIC MGU-K',
      value: '350 kW (~469 HP)',
      detail: 'Maximum regulatory electric boost',
      isRegulatory: true,
    },
    {
      label: 'FUEL SYSTEM',
      value: '100% Sustainable',
      detail: 'Zero fossil-carbon propellant',
      isRegulatory: true,
    },
    {
      label: 'BRAKING SYSTEM',
      value: 'Brake-by-Wire Carbon',
      detail: 'Regenerative braking integration',
      isRegulatory: true,
    },
    {
      label: 'POWER SPLIT',
      value: '~50% Electric / ~50% ICE',
      detail: '2026 parity architecture',
      isRegulatory: true,
    },
  ] as SpecificationItem[],

  aerodynamics: {
    headline: 'FORM FOLLOWS FLOW',
    description:
      'The 2026 active aero mandate balances straight-line efficiency with aerodynamic stability through curves.',
    components: [
      {
        title: 'Active Dual-State Front Wing',
        classification: 'AERO // FRONT',
        focus: 'Drag Reduction & Flow Ingestion',
        description:
          'Shifts dynamically between high-downforce and low-drag modes to feed clean air into the floor venturis.',
        specs: ['Active element adjustment', 'Variable pitch winglets', 'Composite endplates'],
      },
      {
        title: 'Undercut Sidepods',
        classification: 'THERMAL // FLOW',
        focus: 'Power Unit Heat Rejection',
        description:
          'Tightly packages the Red Bull Ford power unit while directing undisturbed airflow toward the rear diffuser throat.',
        specs: ['Compact heat exchangers', 'Sculpted undercut channel', 'Louvered exits'],
      },
      {
        title: 'Venturi Underfloor & Diffuser',
        classification: 'GROUND EFFECT',
        focus: 'Stable Low-Pressure Suction',
        description:
          'Generates consistent ground-effect downforce across all ride heights, eliminating aerodynamic bouncing.',
        specs: ['Underbody Venturi strakes', 'High-expansion ramp', 'Titanium wear skids'],
      },
      {
        title: 'Active Variable Rear Wing',
        classification: 'AERO // REAR',
        focus: 'Straight-line Acceleration',
        description:
          'Conforms to 2026 active aero regulations, opening on straights to minimize wake and maximize top-end speed.',
        specs: ['Hydraulic flap actuator', 'Carbon beam wing', 'Integrated endplate louvers'],
      },
      {
        title: 'Carbon-Composite Tub',
        classification: 'STRUCTURE',
        focus: 'Torsional Rigidity & Safety',
        description:
          'Aerospace-grade high-modulus carbon fiber monocoque ensuring maximum structural stiffness and driver safety.',
        specs: ['FIA-certified survival cell', 'Titanium Halo fairing', 'Direct chassis engine mounts'],
      },
    ] as AerodynamicComponent[],
  },

  powertrain: {
    headline: 'RED BULL FORD POWERTRAINS',
    subtext:
      'The 2026 power unit marks a decisive electrical revolution: a 350 kW MGU-K motor working in 50/50 parity with a 1.6L turbo V6 running on 100% sustainable fuels.',
    features: [
      {
        title: 'MGU-K Electric Boost',
        metric: '350',
        unit: 'kW',
        subtext: '~469 HP Electric Power',
        description: 'Instant torque and rapid kinetic energy recovery on corner exits.',
      },
      {
        title: '1.6L Turbo V6 ICE',
        metric: '1.6',
        unit: 'L',
        subtext: 'Direct Injection Turbo',
        description: 'High-thermal-efficiency combustion calibrated for 100% sustainable fuels.',
      },
      {
        title: '100% Sustainable Fuel',
        metric: '100',
        unit: '%',
        subtext: 'Advanced Drop-in Blend',
        description: 'Eliminates fossil carbon emissions without compromising combustion efficiency.',
      },
      {
        title: 'Hybrid Power Parity',
        metric: '50:50',
        unit: 'Ratio',
        subtext: 'Electric / Combustion Parity',
        description: 'Nearly equal split between electrical power output and internal combustion.',
      },
    ] as PowertrainFeature[],
  },

  finalCTA: {
    headline: 'BUILT FOR THE NEXT CHAPTER.',
    subtext: 'Oracle Red Bull Racing. Engineering ambition into performance.',
    primaryCTA: 'RETURN TO THE MACHINE',
    secondaryCTA: 'OFFICIAL TEAM WEBSITE',
    officialUrl: 'https://www.redbullracing.com',
  },

  footer: {
    title: 'ORACLE RED BULL RACING RB22',
    copyright: '© 2026 RB22 Showcase. Independent fan project.',
    disclaimer:
      'Independent non-commercial fan tribute. Not affiliated with or endorsed by Red Bull Racing, Ford, or Formula 1.',
    links: [
      { label: 'Red Bull Racing', href: 'https://www.redbullracing.com' },
      { label: 'FIA Regulations', href: 'https://www.fia.com' },
      { label: 'Formula 1', href: 'https://www.formula1.com' },
    ],
  },
};
