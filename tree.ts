interface Itree {
  label: string;
  link: string;
  children: Itree[];
}

interface Ioffset {
  top: number;
  left: number;
}

const treeData: Itree[] = [
  {
    label: "Banaadir",
    link: "#",
    children: [
      {
        label: "Banaadir",
        link: "#",
        children: [],
      },
      {
        label: "Howlwadaag",
        link: "#",
        children: [
          {
            label: "Sayidka",
            link: "#",
            children: [],
          },
          {
            label: "Sakhaawadiin",
            link: "#",
            children: [],
          },
          {
            label: "Axmed Gurey",
            link: "#",
            children: [],
          },
          {
            label: "Xaawo-Taako",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Hodan",
        link: "#",
        children: [
          {
            label: "Axmed",
            link: "#",
            children: [],
          },
          {
            label: "Kacaan",
            link: "#",
            children: [],
          },
          {
            label: "Taleexo",
            link: "#",
            children: [],
          },
          {
            label: "October",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Waaberi",
        link: "#",
        children: [
          {
            label: "Hanti-Wadaag",
            link: "#",
            children: [],
          },
          {
            label: "Horseed",
            link: "#",
            children: [],
          },
          {
            label: "October",
            link: "#",
            children: [],
          },
          {
            label: "Maajo",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Wartanabadda",
        link: "#",
        children: [
          {
            label: "Janaraal Da'ud",
            link: "#",
            children: [],
          },
          {
            label: "Hantiwadaag",
            link: "#",
            children: [],
          },
          {
            label: "Horseed",
            link: "#",
            children: [],
          },
          {
            label: "Barwaaqo",
            link: "#",
            children: [],
          },
          {
            label: "Xamarbile",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Xamarjajab",
        link: "#",
        children: [
          {
            label: "Horseed",
            link: "#",
            children: [],
          },
          {
            label: "1 May",
            link: "#",
            children: [],
          },
          {
            label: "Janaraal Da'ud",
            link: "#",
            children: [],
          },
          {
            label: "Gaheyr",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Cabdicasiis",
        link: "#",
        children: [
          {
            label: "Dhagax buur",
            link: "#",
            children: [],
          },
          {
            label: "Janaraal  Neero",
            link: "#",
            children: [],
          },
          {
            label: "Lowya cadde",
            link: "#",
            children: [],
          },
          {
            label: "Gaarisa",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Shangaani",
        link: "#",
        children: [
          {
            label: "Hawdka",
            link: "#",
            children: [],
          },
          {
            label: "Mooyaale",
            link: "#",
            children: [],
          },
          {
            label: "Jabuuti",
            link: "#",
            children: [],
          },
          {
            label: "Midnimo",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Xamarweyne",
        link: "#",
        children: [
          {
            label: "Gobannimo",
            link: "#",
            children: [],
          },
          {
            label: "Waaxada 1",
            link: "#",
            children: [],
          },
          {
            label: "Hilaac",
            link: "#",
            children: [],
          },
          {
            label: "Horseed",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Boondheere",
        link: "#",
        children: [
          {
            label: "Siinaay",
            link: "#",
            children: [],
          },
          {
            label: "Nasiib-Buundo",
            link: "#",
            children: [],
          },
          {
            label: "Yuusuf Alkownayn",
            link: "#",
            children: [],
          },
          {
            label: "Darjiinka Daahsoon",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Dharkanleey",
        link: "#",
        children: [
          {
            label: "Dhamane Yassin",
            link: "#",
            children: [],
          },
          {
            label: "Xanaano Bulsho",
            link: "#",
            children: [],
          },
          {
            label: "Saciid Rooraye",
            link: "#",
            children: [],
          },
          {
            label: "Dhagaxtuur ",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Wadajir",
        link: "#",
        children: [
          {
            label: "Janaraal Da'ud",
            link: "#",
            children: [],
          },
          {
            label: "Xaawo",
            link: "#",
            children: [],
          },
          {
            label: "Xalane",
            link: "#",
            children: [],
          },
          {
            label: "Timacade",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Kaaraan",
        link: "#",
        children: [
          {
            label: "Faanoole",
            link: "#",
            children: [],
          },
          {
            label: "Jabuuti",
            link: "#",
            children: [],
          },
          {
            label: "Nageyle",
            link: "#",
            children: [],
          },
          {
            label: "Wajeer",
            link: "#",
            children: [],
          },
          {
            label: "Jamhuuriye",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Heliwaa",
        link: "#",
        children: [
          {
            label: "Bandar wanaag",
            link: "#",
            children: [],
          },
          {
            label: "Waxarcade",
            link: "#",
            children: [],
          },
          {
            label: "Barwaaqo",
            link: "#",
            children: [],
          },
          {
            label: "Ceel Carfiid",
            link: "#",
            children: [],
          },
          {
            label: "Gobadley",
            link: "#",
            children: [],
          },
          {
            label: "Ceylcade",
            link: "#",
            children: [],
          },
          {
            label: "Laanta 2",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Yaaqshiid",
        link: "#",
        children: [
          {
            label: "Heegan",
            link: "#",
            children: [],
          },
          {
            label: "Horseed",
            link: "#",
            children: [],
          },
          {
            label: "Junngal",
            link: "#",
            children: [],
          },
          {
            label: "Towfiiq",
            link: "#",
            children: [],
          },
          {
            label: "Waaxada  5",
            link: "#",
            children: [],
          },
          {
            label: "Tawakal",
            link: "#",
            children: [],
          },
          {
            label: "Laanta 4",
            link: "#",
            children: [],
          },
          {
            label: "Laanta 1",
            link: "#",
            children: [],
          },
          {
            label: "Laanta 2",
            link: "#",
            children: [],
          },
          {
            label: "1 Luuliyo",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Dayniile",
        link: "#",
        children: [
          {
            label: "Horseed",
            link: "#",
            children: [],
          },
          {
            label: "Barwaaqo",
            link: "#",
            children: [],
          },
          {
            label: "Oodweyne",
            link: "#",
            children: [],
          },
          {
            label: "Halgan",
            link: "#",
            children: [],
          },
          {
            label: "Qurdama",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Shibis",
        link: "#",
        children: [
          {
            label: "Saqaawadiin",
            link: "#",
            children: [],
          },
          {
            label: "Axmed Gurey",
            link: "#",
            children: [],
          },
          {
            label: "Xalane",
            link: "#",
            children: [],
          },
          {
            label: "Calosow Dheere",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Kaxda",
        link: "#",
        children: [
          {
            label: "Janaraal Luqliqato",
            link: "#",
            children: [],
          },
          {
            label: "Abaadir",
            link: "#",
            children: [],
          },
          {
            label: "Cumar Fixaaska",
            link: "#",
            children: [],
          },
          {
            label: "Shinbiraale",
            link: "#",
            children: [],
          },
        ],
      },
    ],
  },
  {
    label: "Awdal",
    link: "#",
    children: [
      {
        label: "Baki",
        link: "#",
        children: [],
      },
      {
        label: "Boorame",
        link: "#",
        children: [],
      },
      {
        label: "Lug hayo",
        link: "#",
        children: [],
      },
      {
        label: "Zaylac",
        link: "#",
        children: [],
      },
      {
        label: "Dilla",
        link: "#",
        children: [],
      },
    ],
  },
  {
    label: "Bari",
    link: "#",
    children: [
      {
        label: "Boosaaso",
        link: "#",
        children: [],
      },
      {
        label: "Bandar-beyla",
        link: "#",
        children: [],
      },
      {
        label: "Qardho",
        link: "#",
        children: [],
      },
      {
        label: "Isku-shuban",
        link: "#",
        children: [],
      },
      {
        label: "Qandala",
        link: "#",
        children: [],
      },
      {
        label: "Caluula",
        link: "#",
        children: [],
      },
      {
        label: "Baar-gaal",
        link: "#",
        children: [],
      },
      {
        label: "Xaafuun",
        link: "#",
        children: [],
      },
      {
        label: "Rako",
        link: "#",
        children: [],
      },
      {
        label: "Waaciya",
        link: "#",
        children: [],
      },
      {
        label: "Ufayn",
        link: "#",
        children: [],
      },
    ],
  },
  {
    label: "Togdheer",
    link: "#",
    children: [
      {
        label: "Burco",
        link: "#",
        children: [
          {
            label: "Maxamed Cali ",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Buuhoodle",
        link: "#",
        children: [],
      },
      {
        label: "Ood-weyne",
        link: "#",
        children: [],
      },
      {
        label: "Sheikh",
        link: "#",
        children: [],
      },
    ],
  },
  {
    label: "Sool",
    link: "#",
    children: [
      {
        label: "Laas-caanood",
        link: "#",
        children: [],
      },
      {
        label: "Taleex",
        link: "#",
        children: [],
      },
      {
        label: "Ceynabo",
        link: "#",
        children: [],
      },
      {
        label: "Xuddun",
        link: "#",
        children: [],
      },
    ],
  },
  {
    label: "Galguduud",
    link: "#",
    children: [
      {
        label: "Galguduud Region",
        link: "#",
        children: [],
      },
      {
        label: "Dhuusa-mareeb.",
        link: "#",
        children: [
          {
            label: "Waaberi",
            link: "#",
            children: [],
          },
          {
            label: "Horseed",
            link: "#",
            children: [],
          },
          {
            label: "Waracadde",
            link: "#",
            children: [],
          },
          {
            label: "Dayah",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Ceel-Buur",
        link: "#",
        children: [],
      },
      {
        label: "Ceel-Dheer",
        link: "#",
        children: [],
      },
      {
        label: "Cadaado",
        link: "#",
        children: [
          {
            label: "N/A",
            link: "#",
            children: [],
          },
          {
            label: "Galbeed",
            link: "#",
            children: [],
          },
          {
            label: "Karaama",
            link: "#",
            children: [],
          },
          {
            label: "Waaberi",
            link: "#",
            children: [],
          },
          {
            label: "Bakiin",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Cabuud-waaq",
        link: "#",
        children: [
          {
            label: "N/A",
            link: "#",
            children: [],
          },
          {
            label: "October",
            link: "#",
            children: [],
          },
          {
            label: "1 Luuliyo",
            link: "#",
            children: [],
          },
          {
            label: "Amaano",
            link: "#",
            children: [],
          },
          {
            label: "Waaberi",
            link: "#",
            children: [],
          },
          {
            label: "Ubax",
            link: "#",
            children: [],
          },
          {
            label: "Horseed",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Gal-hareeri",
        link: "#",
        children: [
          {
            label: "Bilan",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Balan-Bal",
        link: "#",
        children: [],
      },
      {
        label: "Alad",
        link: "#",
        children: [],
      },
      {
        label: "Xaraale",
        link: "#",
        children: [],
      },
      {
        label: "Guriceel",
        link: "#",
        children: [
          {
            label: "Tawakal",
            link: "#",
            children: [],
          },
          {
            label: "Wadajir",
            link: "#",
            children: [],
          },
          {
            label: "Howlwadaag",
            link: "#",
            children: [],
          },
          {
            label: "Bilan",
            link: "#",
            children: [],
          },
        ],
      },
    ],
  },
  {
    label: "Hiiraan",
    link: "#",
    children: [
      {
        label: "Beled-weyne",
        link: "#",
        children: [
          {
            label: "1.\tOktober (buunto weyn)",
            link: "#",
            children: [],
          },
          {
            label: "Camalow Cusub",
            link: "#",
            children: [],
          },
          {
            label: "Howlwadaag",
            link: "#",
            children: [],
          },
          {
            label: "Raadeer",
            link: "#",
            children: [],
          },
          {
            label: "Kooshin",
            link: "#",
            children: [],
          },
          {
            label: "Xaawo Taako",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Buulo-burte",
        link: "#",
        children: [
          {
            label: "Oktobar ",
            link: "#",
            children: [],
          },
          {
            label: "Indhaceel",
            link: "#",
            children: [],
          },
          {
            label: "Hanti-Wadaag",
            link: "#",
            children: [],
          },
          {
            label: "Bak-Abeeso",
            link: "#",
            children: [],
          },
          {
            label: "Loogaayda",
            link: "#",
            children: [],
          },
          {
            label: "Celgaabta",
            link: "#",
            children: [],
          },
          {
            label: "Buulabari",
            link: "#",
            children: [],
          },
          {
            label: "Suuqa Xoolaha",
            link: "#",
            children: [],
          },
          {
            label: "Boosteejada",
            link: "#",
            children: [],
          },
          {
            label: "Buulo Xuday",
            link: "#",
            children: [],
          },
          {
            label: "Hotel Raaxo",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Jalalaqsi",
        link: "#",
        children: [
          {
            label: "Jaciir",
            link: "#",
            children: [],
          },
          {
            label: "Buulo Jaro",
            link: "#",
            children: [],
          },
          {
            label: "Afgooye",
            link: "#",
            children: [],
          },
          {
            label: "Xamiir Gaab",
            link: "#",
            children: [],
          },
          {
            label: "Afcad",
            link: "#",
            children: [],
          },
          {
            label: "Qoryaale",
            link: "#",
            children: [],
          },
          {
            label: "IJI",
            link: "#",
            children: [],
          },
          {
            label: "Dheen",
            link: "#",
            children: [],
          },
          {
            label: "Quracjafle",
            link: "#",
            children: [],
          },
          {
            label: "Jinbileey",
            link: "#",
            children: [],
          },
          {
            label: "Jamaaca Raaxaale",
            link: "#",
            children: [],
          },
          {
            label: "Buulo Cariyaan",
            link: "#",
            children: [],
          },
          {
            label: "Baadicadde",
            link: "#",
            children: [],
          },
          {
            label: "Siibaay",
            link: "#",
            children: [],
          },
          {
            label: "CeelCiid",
            link: "#",
            children: [],
          },
          {
            label: "Fiidoow",
            link: "#",
            children: [],
          },
          {
            label: "Show",
            link: "#",
            children: [],
          },
          {
            label: "Baqdaad",
            link: "#",
            children: [],
          },
          {
            label: "Maako",
            link: "#",
            children: [],
          },
          {
            label: "Dirgooys",
            link: "#",
            children: [],
          },
          {
            label: "Tardo ",
            link: "#",
            children: [],
          },
          {
            label: "N/A",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Matabaan",
        link: "#",
        children: [
          {
            label: "N/A",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Maxaas",
        link: "#",
        children: [
          {
            label: "Muqukuri ",
            link: "#",
            children: [],
          },
        ],
      },
    ],
  },
  {
    label: "Gedo",
    link: "#",
    children: [
      {
        label: "Garba-Haarreey",
        link: "#",
        children: [],
      },
      {
        label: "Luuq",
        link: "#",
        children: [
          {
            label: "Waaberi",
            link: "#",
            children: [],
          },
          {
            label: "Hilaac",
            link: "#",
            children: [],
          },
          {
            label: "Sh Maxaad",
            link: "#",
            children: [],
          },
          {
            label: "Buulu-Muusley",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Baar-dheere",
        link: "#",
        children: [
          {
            label: "N/A",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Beled-Xaawo",
        link: "#",
        children: [
          {
            label: "Dhabad",
            link: "#",
            children: [],
          },
          {
            label: "Qansax Burwaaqo",
            link: "#",
            children: [],
          },
          {
            label: "8 Aad",
            link: "#",
            children: [],
          },
          {
            label: "Gooled Hayd",
            link: "#",
            children: [],
          },
          {
            label: "Xalenley",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Ceel-waaq",
        link: "#",
        children: [
          {
            label: "N/A",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Doolow",
        link: "#",
        children: [
          {
            label: "Wadajir",
            link: "#",
            children: [],
          },
          {
            label: "Kabaaso",
            link: "#",
            children: [],
          },
          {
            label: "Horseed",
            link: "#",
            children: [],
          },
          {
            label: "Qansaxley",
            link: "#",
            children: [],
          },
          {
            label: "Halgan",
            link: "#",
            children: [],
          },
          {
            label: "Ceelasha",
            link: "#",
            children: [],
          },
        ],
      },
    ],
  },
  {
    label: "Waqooyi Galbeed",
    link: "#",
    children: [
      {
        label: "Hargeysa",
        link: "#",
        children: [
          {
            label: "26-June",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Berbera",
        link: "#",
        children: [],
      },
      {
        label: "Gebilay",
        link: "#",
        children: [],
      },
      {
        label: "Dacar budhuq",
        link: "#",
        children: [],
      },
    ],
  },
  {
    label: "Mudug",
    link: "#",
    children: [
      {
        label: "Gaal-kacyo",
        link: "#",
        children: [
          {
            label: "N/A",
            link: "#",
            children: [],
          },
          {
            label: "Wadajir",
            link: "#",
            children: [],
          },
          {
            label: "Horumar",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Hobyo",
        link: "#",
        children: [
          {
            label: "Ceel-Guuka ",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Xarar-Dheere",
        link: "#",
        children: [
          {
            label: "N/A",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Jarriiban",
        link: "#",
        children: [],
      },
      {
        label: "Goldogob",
        link: "#",
        children: [],
      },
    ],
  },
  {
    label: "Shabeelada Dhexe",
    link: "#",
    children: [
      {
        label: "Jowhar",
        link: "#",
        children: [
          {
            label: "Sheikh Ooyaaye",
            link: "#",
            children: [],
          },
          {
            label: "Shamiinto",
            link: "#",
            children: [],
          },
          {
            label: "Buule Abliko",
            link: "#",
            children: [],
          },
          {
            label: "Waraxleey",
            link: "#",
            children: [],
          },
          {
            label: "Biyo cade",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Bal-cad",
        link: "#",
        children: [
          {
            label: "Mareereey",
            link: "#",
            children: [],
          },
          {
            label: "Jameeco",
            link: "#",
            children: [],
          },
          {
            label: "Xawaadley",
            link: "#",
            children: [],
          },
          {
            label: "Yaaqle",
            link: "#",
            children: [],
          },
          {
            label: "Koorre",
            link: "#",
            children: [],
          },
          {
            label: "Mukay-dheere ",
            link: "#",
            children: [],
          },
          {
            label: "War-gaabo",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Cadale",
        link: "#",
        children: [
          {
            label: "Maxaa Saciid",
            link: "#",
            children: [],
          },
          {
            label: "Xaaji cali ",
            link: "#",
            children: [],
          },
          {
            label: "Cadow uul ",
            link: "#",
            children: [],
          },
          {
            label: "Bursho shiiq",
            link: "#",
            children: [],
          },
          {
            label: "Ceelmuluq",
            link: "#",
            children: [],
          },
          {
            label: "Masaajid Cali Gaduud",
            link: "#",
            children: [],
          },
          {
            label: "Geelgub",
            link: "#",
            children: [],
          },
          {
            label: "Koogaar",
            link: "#",
            children: [],
          },
          {
            label: "Wargaadhi",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Aadan Yabaal",
        link: "#",
        children: [
          {
            label: "Waaxada 1",
            link: "#",
            children: [],
          },
          {
            label: "Waaxada 2",
            link: "#",
            children: [],
          },
          {
            label: "Waaxada 3",
            link: "#",
            children: [],
          },
          {
            label: "Waaxada 4",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Mahaddaay",
        link: "#",
        children: [
          {
            label: "Waaxada 1",
            link: "#",
            children: [],
          },
          {
            label: "Waaxada 2",
            link: "#",
            children: [],
          },
          {
            label: "Waaxada 3",
            link: "#",
            children: [],
          },
          {
            label: "Waaxada 4",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Ruun-nirgood",
        link: "#",
        children: [
          {
            label: "Ceelbacad",
            link: "#",
            children: [],
          },
          {
            label: "Cad-Cadeey",
            link: "#",
            children: [],
          },
          {
            label: "Cali Ahmed",
            link: "#",
            children: [],
          },
          {
            label: "Dumaaye",
            link: "#",
            children: [],
          },
          {
            label: "Waaxada 1",
            link: "#",
            children: [],
          },
          {
            label: "Waaxada 2",
            link: "#",
            children: [],
          },
          {
            label: "Waaxada 3",
            link: "#",
            children: [],
          },
          {
            label: "Waaxada 4",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "War-sheikh",
        link: "#",
        children: [
          {
            label: "Waaxada 1",
            link: "#",
            children: [],
          },
          {
            label: "Waaxada 2",
            link: "#",
            children: [],
          },
          {
            label: "Waaxada 3",
            link: "#",
            children: [],
          },
          {
            label: "Waaxada 4",
            link: "#",
            children: [],
          },
        ],
      },
    ],
  },
  {
    label: "Shabeelada Hoose",
    link: "#",
    children: [
      {
        label: "Marka",
        link: "#",
        children: [
          {
            label: "Horseed",
            link: "#",
            children: [],
          },
          {
            label: "Wadajir",
            link: "#",
            children: [],
          },
          {
            label: "Hoolwadaag",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Af-gooye",
        link: "#",
        children: [
          {
            label: "Xaawo Taako",
            link: "#",
            children: [],
          },
          {
            label: "21ka Oktoobar",
            link: "#",
            children: [],
          },
          {
            label: "Damaleey",
            link: "#",
            children: [],
          },
          {
            label: "Dhagaxtuur",
            link: "#",
            children: [],
          },
          {
            label: "Ceelasha Biyaha ",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Wanle-weyn",
        link: "#",
        children: [],
      },
      {
        label: "Qoryo-leey",
        link: "#",
        children: [
          {
            label: "Hodan",
            link: "#",
            children: [],
          },
          {
            label: "Xalane",
            link: "#",
            children: [],
          },
          {
            label: "Wadajir",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Baraawe",
        link: "#",
        children: [
          {
            label: "Siyaame ",
            link: "#",
            children: [],
          },
          {
            label: "Siin Dhaas ",
            link: "#",
            children: [],
          },
          {
            label: "Warer Male ",
            link: "#",
            children: [],
          },
          {
            label: "Aqabtalaal",
            link: "#",
            children: [],
          },
          {
            label: "Iiriile ",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Sablaale",
        link: "#",
        children: [
          {
            label: " Haawaay",
            link: "#",
            children: [],
          },
          {
            label: "Deemaay",
            link: "#",
            children: [],
          },
          {
            label: "Laabkaban",
            link: "#",
            children: [],
          },
          {
            label: "Arbow heerow",
            link: "#",
            children: [],
          },
          {
            label: "Eerile",
            link: "#",
            children: [],
          },
          {
            label: "Mariinyigubaay iyo Owdheegle",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Kurtun-waareey",
        link: "#",
        children: [],
      },
      {
        label: "Dajuuma",
        link: "#",
        children: [],
      },
      {
        label: "Aw-dheegle",
        link: "#",
        children: [
          {
            label: "Bariire",
            link: "#",
            children: [],
          },
          {
            label: "Mubaarak ",
            link: "#",
            children: [],
          },
          {
            label: "Gumeysi-diid",
            link: "#",
            children: [],
          },
          {
            label: "Ibutey",
            link: "#",
            children: [],
          },
        ],
      },
    ],
  },
  {
    label: "Bay",
    link: "#",
    children: [
      {
        label: "Baydhabo",
        link: "#",
        children: [
          {
            label: "Berdaale",
            link: "#",
            children: [],
          },
          {
            label: "Hawlwadaag",
            link: "#",
            children: [],
          },
          {
            label: "Horseed",
            link: "#",
            children: [],
          },
          {
            label: "Isha ",
            link: "#",
            children: [],
          },
          {
            label: "Wadajir",
            link: "#",
            children: [],
          },
          {
            label: "Towfiiq",
            link: "#",
            children: [],
          },
          {
            label: "Balaamey",
            link: "#",
            children: [],
          },
          {
            label: "Buula Jadiid",
            link: "#",
            children: [],
          },
          {
            label: "Cadaada",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Buur-hakaba",
        link: "#",
        children: [],
      },
      {
        label: "Diin-soor",
        link: "#",
        children: [
          {
            label: "N/A",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Qansax-dheere",
        link: "#",
        children: [],
      },
      {
        label: "Berdaale",
        link: "#",
        children: [
          {
            label: "N/A",
            link: "#",
            children: [],
          },
        ],
      },
    ],
  },
  {
    label: "Bakool",
    link: "#",
    children: [
      {
        label: "Xuddur",
        link: "#",
        children: [
          {
            label: "Buulow",
            link: "#",
            children: [],
          },
          {
            label: "Moorogabey",
            link: "#",
            children: [],
          },
          {
            label: "Horseed ",
            link: "#",
            children: [],
          },
          {
            label: "Sheikh Aways",
            link: "#",
            children: [],
          },
          {
            label: "Shiddle",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Tayeegloow",
        link: "#",
        children: [
          {
            label: "N/A",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Waa-jid.",
        link: "#",
        children: [],
      },
      {
        label: "Ceel-berde",
        link: "#",
        children: [],
      },
      {
        label: "Yeed",
        link: "#",
        children: [],
      },
      {
        label: "Rab-dhuurre",
        link: "#",
        children: [],
      },
    ],
  },
  {
    label: "Jubada Dhexe",
    link: "#",
    children: [
      {
        label: "Buâ€™aale",
        link: "#",
        children: [],
      },
      {
        label: "Jilib",
        link: "#",
        children: [],
      },
      {
        label: "Saakoow",
        link: "#",
        children: [],
      },
      {
        label: "Dujuma",
        link: "#",
        children: [],
      },
    ],
  },
  {
    label: "Sanaag",
    link: "#",
    children: [
      {
        label: "Ceerigaabo",
        link: "#",
        children: [],
      },
      {
        label: "Laas-qoray",
        link: "#",
        children: [],
      },
      {
        label: "Ceel-afwen",
        link: "#",
        children: [],
      },
      {
        label: "Baran",
        link: "#",
        children: [],
      },
    ],
  },
  {
    label: "Jubada Hoose",
    link: "#",
    children: [
      {
        label: "Kismaayo.",
        link: "#",
        children: [
          {
            label: "Farjanno",
            link: "#",
            children: [],
          },
          {
            label: "Faanoole",
            link: "#",
            children: [],
          },
          {
            label: "Calanleey",
            link: "#",
            children: [],
          },
          {
            label: "Shaqaalaha",
            link: "#",
            children: [],
          },
          {
            label: "Isku Filan ",
            link: "#",
            children: [],
          },
          {
            label: "Guulwade",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Jamaame",
        link: "#",
        children: [
          {
            label: "Bangeeeni  ",
            link: "#",
            children: [],
          },
          {
            label: "Turdho",
            link: "#",
            children: [],
          },
          {
            label: "Naftaa Quur",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Af-madow",
        link: "#",
        children: [
          {
            label: "Waamo",
            link: "#",
            children: [],
          },
          {
            label: "Faanoole",
            link: "#",
            children: [],
          },
          {
            label: "Danwadaag",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Badhaadhe",
        link: "#",
        children: [
          {
            label: "Kulbiyow ",
            link: "#",
            children: [],
          },
          {
            label: "Ras Kamboni ",
            link: "#",
            children: [],
          },
          {
            label: "Hosingow",
            link: "#",
            children: [],
          },
          {
            label: "Rissini",
            link: "#",
            children: [],
          },
        ],
      },
      {
        label: "Xagar",
        link: "#",
        children: [],
      },
    ],
  },
  {
    label: "Nugaal",
    link: "#",
    children: [
      {
        label: "Garowe",
        link: "#",
        children: [],
      },
      {
        label: "Eyl",
        link: "#",
        children: [],
      },
      {
        label: "Dan-gorayo",
        link: "#",
        children: [],
      },
      {
        label: "Bur-tinle",
        link: "#",
        children: [],
      },
    ],
  },
  {
    label: "TR",
    link: "#",
    children: [],
  },
];

let foundNodes: Element[] = [];
let activeFoundNode: number = 0;

// Function to create a tree node element
function createTreeNode(node: Itree, collapse: boolean): HTMLLIElement {
  const treeNode = document.createElement("li");
  const nodeContent = document.createElement("div");
  const nodeSpan = document.createElement("span");
  const anchorNode = document.createElement("a");

  // Add class to node content
  nodeContent.classList.add("node__content");

  // Set node label
  nodeSpan.textContent = node.label;

  // Set anchor data
  anchorNode.target = "_blank";
  anchorNode.href = node.link;
  anchorNode.textContent = "open link";

  // Append node content to the tree node
  nodeContent.appendChild(nodeSpan);

  // If node has children, create a toggle element
  if (node.children.length > 0) {
    const nodeToggle = document.createElement("div");

    // Style node toggle
    nodeToggle.classList.add("toggle__node");
    nodeToggle.textContent = "Expand/Collapse";
    nodeContent.appendChild(nodeToggle);
  }

  // Append anchor to the node content
  nodeContent.appendChild(anchorNode);

  // Append node content to the tree node
  treeNode.appendChild(nodeContent);

  // Add styles to the tree node
  treeNode.classList.add(
    "tree__node",
    node.children.length > 0 ? "children__node" : "no__children__node"
  );

  return treeNode;
}

// Recursive function to render the tree
function renderTree(
  treeData: Itree[],
  treeContainer: Element,
  collapse: boolean = false
): void {
  treeData.forEach((node, index) => {
    // Create a tree node element
    const treeNode = createTreeNode(node, collapse);

    // Append the tree node to the container
    treeContainer.appendChild(treeNode);

    // hiding or showing
    collapse && $(treeContainer).slideUp();

    // If node has children, create a parent container and recurse
    if (node.children.length > 0) {
      const parentNode = document.createElement("ul");
      parentNode.classList.add("parent__container");
      treeNode.appendChild(parentNode);
      renderTree(node.children, parentNode, true);
    }
  });
}

// Check if tree data is not empty
if (treeData.length > 0) {
  // Get the tree container element from the DOM
  const treeContainer = document.querySelector(".tree__container");

  // Create a parent container for the tree
  const parentNode = document.createElement("ul");
  parentNode.classList.add("parent__container");

  // Append the parent container to the tree container
  treeContainer!.appendChild(parentNode);

  // Render the tree recursively
  renderTree(treeData, parentNode);
}

// Toggle off/on when the trigger is clicked
$(".tree__container").on("click", ".toggle__node", function () {
  const parent__container = $(this)
    .parent()
    .parent()
    .children(".parent__container");

  parent__container.slideToggle(500);
});

$(".bx-collapse").on("click", function () {
  collapse_or_expand(false);
});

$(".bx-expand").on("click", function () {
  collapse_or_expand(true);
});

function collapse_or_expand(
  expand: boolean,
  element: Element | null = null
): void {
  const parentContainer = $(".parent__container");

  if (parentContainer.length > 0) {
    const element = parentContainer[0];
    const children = $(element).children("li:has(.toggle__node)");

    children.map(function (index, item) {
      const parentItem = $(item).children(".parent__container");
      coe(parentItem, expand);
    });
  }
}

function coe(parent: JQuery<HTMLElement>, expand: boolean): void {
  const subNodes = $(parent).children("li:has(.toggle__node)");

  if (subNodes.length > 0) {
    subNodes.map(function (index, item) {
      const parentItem = $(item).children(".parent__container");
      coe(parentItem, expand);
    });
  }

  expand ? $(parent).slideDown(500) : $(parent).slideUp(500);
}

$("#search").on("input", function (event) {
  const searchText: string = (
    event.target as HTMLInputElement
  ).value.toLowerCase();
  removeHighlighting();
  foundNodes = [];
  activeFoundNode = 0;
  $(".total__find").text(0);
  $(".current__find").text(0);

  if (searchText.trim() !== "") {
    collapse_or_expand(true);
    highlightMatchingLabels(searchText);
  }
});

function highlightMatchingLabels(searchText: string): void {
  let count = 0;
  foundNodes = [];
  $(".tree__container span").each(function (index, item) {
    if ($(item).text().toLowerCase().includes(searchText)) {
      count++;
      if (!foundNodes.includes(item as Element))
        foundNodes.push(item as Element);
    }
  });

  if (count > 0) {
    $(".total__find").text(count);
    $(".current__find").text(activeFoundNode + 1);
    highlightNode(foundNodes[activeFoundNode]);
  }
}

function highlightNode(treeNode: Element): void {
  $(treeNode).addClass("highlighted__node");
}

function removeHighlighting(): void {
  $(".tree__container span").removeClass("highlighted__node");
}

$(".bx-chevron-down").on("click", function () {
  moveDown();
});

function moveDown(): void {
  if (activeFoundNode === foundNodes.length - 1) activeFoundNode = -1;

  activeFoundNode++;
  removeHighlighting();
  $(".current__find").text(activeFoundNode + 1);
  highlightNode(foundNodes[activeFoundNode]);
  scrollToElement();
}

$(".bx-chevron-up").on("click", function () {
  moveUp();
});

function moveUp(): void {
  if (activeFoundNode === 0) activeFoundNode = foundNodes.length;

  activeFoundNode--;
  removeHighlighting();
  $(".current__find").text(activeFoundNode + 1);
  highlightNode(foundNodes[activeFoundNode]);
  scrollToElement();
}

function scrollToElement(): void {
  const targetElement: JQuery<HTMLElement> = $(".highlighted__node");

  if (targetElement) {
    const offset: Ioffset = targetElement.offset()!;
    $("html, body").scrollTop(offset.top - 40);
  }
}

// Function to handle keydown events
$(document).keydown(function (e) {
  // Check for Control + F
  if (e.ctrlKey && e.key === "f") {
    e.preventDefault();
    $("#search").focus();
  }

  // Check for arrow keys
  if (e.key === "ArrowUp") {
    moveUp();
  } else if (e.key === "ArrowDown") {
    moveDown();
  }
});
