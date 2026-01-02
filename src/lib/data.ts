// Timeline Events Data
export interface TimelineEvent {
    year: number;
    date: string;
    title: { ar: string; en: string };
    description: { ar: string; en: string };
    category: { ar: string; en: string };
    featured?: boolean;
    ongoing?: boolean;
    stats?: {
        label: { ar: string; en: string };
        value: string;
    };
}

export const timelineEvents: TimelineEvent[] = [
    {
        year: 1917,
        date: "1917-11-02",
        title: { ar: "وعد بلفور", en: "Balfour Declaration" },
        description: {
            ar: "وعد بريطاني بإقامة وطن قومي لليهود في فلسطين، وضع الأساس للنكبة.",
            en: "British promise to establish a Jewish homeland in Palestine, laying the groundwork for the Nakba."
        },
        category: { ar: "الانتداب البريطاني", en: "British Mandate" }
    },
    {
        year: 1936,
        date: "1936-1939",
        title: { ar: "الثورة الفلسطينية الكبرى", en: "The Great Palestinian Revolt" },
        description: {
            ar: "ثورة شعبية ضد الانتداب البريطاني والهجرة اليهودية استمرت ثلاث سنوات.",
            en: "A popular uprising against British rule and Jewish immigration lasting three years."
        },
        category: { ar: "المقاومة", en: "Resistance" },
        stats: { label: { ar: "الشهداء", en: "Martyrs" }, value: "5,000+" }
    },
    {
        year: 1947,
        date: "1947-11-29",
        title: { ar: "قرار التقسيم", en: "UN Partition Plan" },
        description: {
            ar: "قرار الأمم المتحدة 181 بتقسيم فلسطين. أعطى 54% من الأرض لليهود رغم امتلاكهم 7% فقط.",
            en: "UN Resolution 181 partitioning Palestine. Gave 54% of land to Jews despite owning only 7%."
        },
        category: { ar: "الأمم المتحدة", en: "United Nations" },
        stats: { label: { ar: "الأرض لليهود", en: "Land to Jews" }, value: "54%" }
    },
    {
        year: 1948,
        date: "1948-04-09",
        title: { ar: "مجزرة دير ياسين", en: "Deir Yassin Massacre" },
        description: {
            ar: "قتل أكثر من 250 فلسطينياً في قرية دير ياسين على يد العصابات الصهيونية.",
            en: "Over 250 Palestinians killed in Deir Yassin village by Zionist militias."
        },
        category: { ar: "المجازر", en: "Massacres" },
        stats: { label: { ar: "الشهداء", en: "Martyrs" }, value: "254" }
    },
    {
        year: 1948,
        date: "1948-05-15",
        title: { ar: "النكبة", en: "The Nakba" },
        description: {
            ar: "تهجير أكثر من 750,000 فلسطيني وتدمير أكثر من 500 قرية. بداية التطهير العرقي.",
            en: "Displacement of 750,000+ Palestinians and destruction of 500+ villages. Ethnic cleansing begins."
        },
        category: { ar: "النكبة", en: "The Nakba" },
        featured: true,
        stats: { label: { ar: "المهجرين", en: "Displaced" }, value: "750,000+" }
    },
    {
        year: 1967,
        date: "1967-06-05",
        title: { ar: "النكسة", en: "The Naksa" },
        description: {
            ar: "احتلال الضفة الغربية وغزة وسيناء والجولان. تهجير 300,000 فلسطيني إضافي.",
            en: "Occupation of West Bank, Gaza, Sinai, and Golan. 300,000 more Palestinians displaced."
        },
        category: { ar: "النكسة", en: "The Naksa" },
        featured: true,
        stats: { label: { ar: "المهجرون الجدد", en: "Newly Displaced" }, value: "300,000" }
    },
    {
        year: 1982,
        date: "1982-09-16",
        title: { ar: "مجزرة صبرا وشاتيلا", en: "Sabra & Shatila Massacre" },
        description: {
            ar: "مجزرة في مخيمي اللاجئين بلبنان تحت غطاء الجيش الإسرائيلي.",
            en: "Massacre in refugee camps in Lebanon under Israeli army cover."
        },
        category: { ar: "المجازر", en: "Massacres" },
        featured: true,
        stats: { label: { ar: "الشهداء", en: "Martyrs" }, value: "3,500+" }
    },
    {
        year: 1987,
        date: "1987-12-08",
        title: { ar: "الانتفاضة الأولى", en: "First Intifada" },
        description: {
            ar: "انتفاضة الحجارة - ثورة شعبية ضد الاحتلال استمرت حتى 1993.",
            en: "The Stone Uprising - popular revolt against occupation lasting until 1993."
        },
        category: { ar: "الانتفاضة", en: "Intifada" },
        featured: true,
        stats: { label: { ar: "الشهداء", en: "Martyrs" }, value: "1,962" }
    },
    {
        year: 2000,
        date: "2000-09-28",
        title: { ar: "الانتفاضة الثانية", en: "Second Intifada" },
        description: {
            ar: "انتفاضة الأقصى بعد اقتحام شارون للمسجد الأقصى.",
            en: "Al-Aqsa Intifada following Sharon's storming of Al-Aqsa Mosque."
        },
        category: { ar: "الانتفاضة", en: "Intifada" },
        featured: true,
        stats: { label: { ar: "الشهداء", en: "Martyrs" }, value: "4,973" }
    },
    {
        year: 2008,
        date: "2008-12-27",
        title: { ar: "حرب غزة الأولى", en: "First Gaza War" },
        description: {
            ar: "عملية الرصاص المصبوب - عدوان استمر 22 يوماً.",
            en: "Operation Cast Lead - 22-day assault on Gaza."
        },
        category: { ar: "حروب غزة", en: "Gaza Wars" },
        stats: { label: { ar: "الشهداء", en: "Martyrs" }, value: "1,417" }
    },
    {
        year: 2014,
        date: "2014-07-08",
        title: { ar: "حرب غزة 2014", en: "2014 Gaza War" },
        description: {
            ar: "عملية الجرف الصامد - 51 يوماً من القصف دمرت أحياء كاملة.",
            en: "Operation Protective Edge - 51 days of bombing destroying entire neighborhoods."
        },
        category: { ar: "حروب غزة", en: "Gaza Wars" },
        featured: true,
        stats: { label: { ar: "الشهداء", en: "Martyrs" }, value: "2,251" }
    },
    {
        year: 2018,
        date: "2018-03-30",
        title: { ar: "مسيرات العودة", en: "Great March of Return" },
        description: {
            ar: "احتجاجات سلمية على حدود غزة للمطالبة بحق العودة.",
            en: "Peaceful protests at Gaza border demanding right of return."
        },
        category: { ar: "المقاومة السلمية", en: "Peaceful Resistance" },
        stats: { label: { ar: "الشهداء", en: "Martyrs" }, value: "223" }
    },
    {
        year: 2023,
        date: "2023-10-07",
        title: { ar: "حرب الإبادة على غزة", en: "Gaza Genocide" },
        description: {
            ar: "أعنف حرب إبادة في التاريخ الفلسطيني. قصف وتجويع وتهجير قسري لأكثر من 2 مليون.",
            en: "Most brutal genocide in Palestinian history. Bombing, starvation, and forced displacement of 2+ million."
        },
        category: { ar: "الإبادة", en: "Genocide" },
        featured: true,
        ongoing: true,
        stats: { label: { ar: "الشهداء", en: "Martyrs" }, value: "45,000+" }
    }
];

export interface Stat {
    label: { ar: string; en: string };
    value: string;
    icon: string;
}

export const overallStats: Stat[] = [
    { label: { ar: "الشهداء منذ 1948", en: "Martyrs Since 1948" }, value: "100,000+", icon: "🕯️" },
    { label: { ar: "اللاجئون", en: "Refugees" }, value: "5.9M", icon: "🏚️" },
    { label: { ar: "المعتقلون", en: "Prisoners" }, value: "10,000+", icon: "⛓️" },
    { label: { ar: "القرى المدمرة", en: "Destroyed Villages" }, value: "531", icon: "🏘️" },
    { label: { ar: "المستوطنات", en: "Settlements" }, value: "300+", icon: "🏗️" },
    { label: { ar: "المستوطنون", en: "Settlers" }, value: "700,000+", icon: "👥" }
];

export interface Pillar {
    title: { ar: string; en: string };
    description: { ar: string; en: string };
    icon: string;
}

export const nakbaPillars: Pillar[] = [
    {
        title: { ar: "التهجير", en: "Displacement" },
        description: { ar: "طرد السكان الأصليين ومنعهم من العودة", en: "Expulsion of natives and denial of return" },
        icon: "🚶"
    },
    {
        title: { ar: "سلب الممتلكات", en: "Property Theft" },
        description: { ar: "الاستيلاء على الأراضي والممتلكات", en: "Seizure of land and property" },
        icon: "🏠"
    },
    {
        title: { ar: "إنكار الهوية", en: "Identity Denial" },
        description: { ar: "حرمان الفلسطينيين من الجنسية والهوية", en: "Denial of citizenship and identity" },
        icon: "📄"
    },
    {
        title: { ar: "تفتيت المجتمع", en: "Social Destruction" },
        description: { ar: "تدمير البنية الاجتماعية والثقافية", en: "Destruction of social and cultural fabric" },
        icon: "👨‍👩‍👧‍👦"
    }
];
