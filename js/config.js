// Menu definition: { header } = section header; items may nest up to 3 levels.
const MENU = [
  // Reports section follows
  { header: "Հաշվետվություններ" },
  { id: "rep-admin", label: "Վարչական" },
  { id: "rep-appeal", label: "Վերաքննիչ" },
  // { id: "rep-cassation", label: "Վճռաբեկ" },
  // State Duty section follows
  { header: "Պետական տուրք" },
  { id: "state-duty-search", label: "Որոնում" },
  {
    id: "state-duty-report", label: "Հաշվետվություն", children: [
      {
        id: "state-duty-report-administrative", label: "Վարչական"
      },
      // {
      //   id: "state-duty-report-appeal", label: "Վերաքննիչ"
      // },
      // {
      //   id: "state-duty-report-cassation", label: "Վճռաբեկ"
      // },
    ]
  },
  // Tools section follows
  { header: "Գործիքներ" },
  { id: "tools-cases", label: "Գործեր" },
  { id: "tools-users", label: "Օգտվողներ" },
  { id: "tools-decisions", label: "Որոշումներ" },
  {
    id: "tools-administrative", label: "Վարչական", children: [
      {
        id: "tools-administrative-judges", label: "Դատավորներ", children: [
          { id: "tools-administrative-judges-case-distribution", label: "Գործերի բաշխվածություն" },
          { id: "tools-administrative-judges-case-performance", label: "Գործերի բորդության ցուցանիշներ" },
        ]
      },
    ]
  },
  {
    id: "tools-appeal", label: "Վերաքննիչ", children: [
      {
        id: "tools-appeal-case-duration", label: "Վարույթների տևողություններ"
      },
    ]
  },
  // Analytics section follows
  { header: "Վերլուծություն" },
  { id: "analytics-overview", label: "Ընդհանուր վիճակագրություն" },
];

// Menu item id -> embedded Metabase public dashboard URL.
const DASHBOARDS = {
  "rep-admin": "https://bi.e-administrativecourt.am/public/dashboard/31d779fc-1464-4a5c-b512-1ae650c62e11",
  "rep-appeal": "https://bi.e-administrativecourt.am/public/dashboard/95b3e324-de92-415d-b392-d75cba504f88",
  "state-duty-search": "https://bi.e-administrativecourt.am/public/dashboard/943e3a2f-904f-4ddc-9fac-c33a89d5f99c",
  "state-duty-report-administrative": "https://bi.e-administrativecourt.am/public/dashboard/aa940bbb-a45a-401a-a877-5f089f9531a0",
  "tools-cases": "https://bi.e-administrativecourt.am/public/dashboard/979e115f-eaee-45f5-b3a4-925f934841a2",
  "tools-users": "https://bi.e-administrativecourt.am/public/dashboard/db06e506-3a0c-43a2-bb18-b9915a307207",
  "tools-decisions": "https://bi.e-administrativecourt.am/public/dashboard/d2539ce1-761b-427d-9065-9f74537e9970",
  "tools-administrative-judges-case-distribution": "https://bi.e-administrativecourt.am/public/dashboard/d07ac03d-5438-4800-9f70-dfa95a585fd6",
  "tools-administrative-judges-case-performance": "https://bi.e-administrativecourt.am/public/dashboard/9a06c3d5-1a02-4541-a5dc-4e0e0e104d59",
  "tools-appeal-case-duration": "https://bi.e-administrativecourt.am/public/dashboard/2df75293-6616-4544-9fcd-596bb927a473",
  "analytics-overview": "https://bi.e-administrativecourt.am/public/dashboard/2f5b49cb-1fd4-46db-b5d6-99f221ca3dd6"
};
