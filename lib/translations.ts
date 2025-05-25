type SkillTranslation = {
  title: string;
  description: string;
};

type SkillsTranslations = {
  title: string;
  frontend: SkillTranslation;
  backend: SkillTranslation;
  mobile: SkillTranslation;
  database: SkillTranslation;
  devops: SkillTranslation;
  web: SkillTranslation;
};

type Translations = {
  ja: {
    nav: {
      about: string;
      skills: string;
      projects: string;
      blog: string;
      contact: string;
    };
    hero: {
      title: string;
      tagline: string;
      viewWork: string;
      getInTouch: string;
    };
    about: {
      title: string;
      subtitle: string;
      description: string;
      story: string;
      summary: string;
      background: string;
      philosophy: string;
      idea: string;
      summary2: string;
      background2: string;
      philosophy2: string;
    };
    skills: SkillsTranslations;
    projects: {
      title: string;
      subtitle: string;
      description: string;
      featured: string;
      liveDemo: string;
      sourceCode: string;
      healthtrack: {
        title: string;
        description: string;
      };
      taskmaster: {
        title: string;
        description: string;
      };
      devconnect: {
        title: string;
        description: string;
      };
      ecotracker: {
        title: string;
        description: string;
      };
    };
    blog: {
      title: string;
      subtitle: string;
      description: string;
      readArticle: string;
      viewAll: string;
    };
    contact: {
      title: string;
      subtitle: string;
      description: string;
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      orEmail: string;
    };
    footer: {
      description: string;
      links: string;
      contact: string;
      social: string;
      available: string;
      rights: string;
    };
  };
  en: {
    nav: {
      about: string;
      skills: string;
      projects: string;
      blog: string;
      contact: string;
    };
    hero: {
      title: string;
      tagline: string;
      viewWork: string;
      getInTouch: string;
    };
    about: {
      title: string;
      subtitle: string;
      description: string;
      story: string;
      summary: string;
      background: string;
      philosophy: string;
      idea: string;
      summary2: string;
      background2: string;
      philosophy2: string;
    };
    skills: SkillsTranslations;
    projects: {
      title: string;
      subtitle: string;
      description: string;
      featured: string;
      liveDemo: string;
      sourceCode: string;
      healthtrack: {
        title: string;
        description: string;
      };
      taskmaster: {
        title: string;
        description: string;
      };
      devconnect: {
        title: string;
        description: string;
      };
      ecotracker: {
        title: string;
        description: string;
      };
    };
    blog: {
      title: string;
      subtitle: string;
      description: string;
      readArticle: string;
      viewAll: string;
    };
    contact: {
      title: string;
      subtitle: string;
      description: string;
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      orEmail: string;
    };
    footer: {
      description: string;
      links: string;
      contact: string;
      social: string;
      available: string;
      rights: string;
    };
  };
};

export const translations: Translations = {
  ja: {
    nav: {
      about: "自己紹介",
      skills: "スキル",
      projects: "プロジェクト",
      blog: "ブログ",
      contact: "お問い合わせ",
    },
    hero: {
      title: "フリーランスフルスタックエンジニア",
      tagline: "スタートアップの課題解決に特化したエンジニア",
      viewWork: "自己紹介",
      getInTouch: "スキル",
    },
    about: {
      title: "自己紹介",
      subtitle: "",
      description: "5年ソフトウェアの開発に携わってきました。",
      story: "経歴",
      summary: "サーバーサイド開発をメインにやってきましたが、フロントエンド開発も現場で経験しています。認証周りの技術選定やSQLパフォーマンスを意識したフロント実装など、全体像を把握しながらフロントエンド開発に取り組むのが得意です。",
      background: "チーム開発では「みんなが働きやすい環境づくり」を大切にしていて、打ち合わせの決定事項をまとめて管理できる仕組みを作ったりと、チーム全体の開発スピードアップに貢献してきました。",
      philosophy: "現場で「これは重要だな」と感じた技術は、個人開発でしっかり深掘りして、次のプロジェクトでチームメンバーに「こんなアプローチもありますよ」と提案できるよう、常にスキルアップを心がけています。",
      idea: "理念",
      summary2: "課題設定と解決策の提供を通じて、スタートアップの成長を加速させることを目指しています。",
      background2: "エンジニアという枠には囚われず、企業の利益から逆算してビジネスの課題を見つけ出し解決策の提案をします。",
      philosophy2: "自分がプロジェクトを離れた後も企業が利益を上げ続ける仕組みづくりをすることを心がけてます。",
    },
    skills: {
      title: "スキル",
      frontend: {
        title: "フロントエンド開発",
        description: "レスポンシブでインタラクティブなユーザーインターフェースの構築",
      },
      backend: {
        title: "バックエンド開発",
        description: "堅牢でスケーラブルなサーバーサイドアプリケーションの作成",
      },
      mobile: {
        title: "モバイル開発",
        description: "クロスプラットフォームモバイルアプリケーションの開発",
      },
      database: {
        title: "データベース設計",
        description: "データベース構造の設計と最適化",
      },
      devops: {
        title: "DevOps & クラウド",
        description: "インフラストラクチャとデプロイメントパイプラインの管理",
      },
      web: {
        title: "Web技術",
        description: "最新のWeb標準とAPIの活用",
      },
    },
    projects: {
      title: "プロジェクト",
      subtitle: "My Projects",
      description: "最近の作品と技術的な成果の展示",
      featured: "注目",
      liveDemo: "デモを見る",
      sourceCode: "ソースコード",
      healthtrack: {
        title: "HealthTrack",
        description: "AIを活用した包括的な健康モニタリングアプリケーション",
      },
      taskmaster: {
        title: "TaskMaster",
        description: "リアルタイムコラボレーション機能を備えたチーム向け生産性ツール",
      },
      devconnect: {
        title: "DevConnect",
        description: "開発者がプロジェクトを共有し、コラボレーションできるソーシャルネットワークプラットフォーム",
      },
      ecotracker: {
        title: "EcoTracker",
        description: "パーソナライズされた推奨事項でカーボンフットプリントを追跡・削減するアプリケーション",
      },
    },
    blog: {
      title: "ブログ",
      subtitle: "Recent Articles",
      description: "テックの旅での洞察と経験を共有",
      readArticle: "記事を読む",
      viewAll: "すべての記事を見る",
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "Get In Touch",
      description: "プロジェクトのご相談はこちらから",
      name: "お名前",
      email: "メールアドレス",
      message: "メッセージ",
      send: "送信",
      sending: "送信中...",
      orEmail: "またはメールで",
    },
    footer: {
      description: "モダンなWeb技術とスタートアップソリューションを専門とするフリーランスソフトウェアエンジニア",
      links: "リンク",
      contact: "お問い合わせ",
      social: "ソーシャル",
      available: "フリーランスの仕事とコンサルティングを受け付けています",
      rights: "All rights reserved.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      title: "Freelance Full Stack Engineer",
      tagline: "Engineers specializing in solving startup issues",
      viewWork: "About",
      getInTouch: "Get In Touch",
    },
    about: {
      title: "About",
      subtitle: "About Me",
      description: "A software engineer with over 6 years of experience specializing in building innovative web applications for startups.",
      story: "Story",
      summary: "I'm a passionate software engineer with over 6 years of experience specializing in building innovative web applications for startups. My approach combines technical expertise with a deep understanding of business needs to create solutions that drive growth.",
      background: "After graduating with a Computer Science degree, I worked at several tech startups before transitioning to freelance work. This journey has equipped me with a diverse skill set and the ability to adapt quickly to different tech stacks and business domains.",
      philosophy: "I believe in writing clean, maintainable code and focusing on user experience. My goal is to help startups bring their vision to life through technology that's both powerful and easy to use.",
      idea: "理念",
      summary2: "私は6年以上の経験を持つ情熱的なソフトウェアエンジニアです。スタートアップ向けの革新的なWebアプリケーションの開発を専門としており、技術的な専門知識とビジネスニーズの深い理解を組み合わせて、成長を促進するソリューションを作成しています。",
      background2: "コンピュータサイエンスの学位を取得後、いくつかのテックスタートアップで働き、その後フリーランスに転向しました。この経験を通じて、多様なスキルセットと異なる技術スタックやビジネスドメインに素早く適応する能力を身につけました。",
      philosophy2: "クリーンで保守性の高いコードを書き、ユーザー体験に焦点を当てることを信条としています。私の目標は、パワフルで使いやすい技術を通じて、スタートアップのビジョンを実現することです。",
    
    },
    skills: {
      title: "Skills",
      frontend: {
        title: "Frontend Development",
        description: "Building responsive and interactive user interfaces",
      },
      backend: {
        title: "Backend Development",
        description: "Creating robust and scalable server-side applications",
      },
      mobile: {
        title: "Mobile Development",
        description: "Developing cross-platform mobile applications",
      },
      database: {
        title: "Database Design",
        description: "Designing and optimizing database structures",
      },
      devops: {
        title: "DevOps & Cloud",
        description: "Managing infrastructure and deployment pipelines",
      },
      web: {
        title: "Web Technologies",
        description: "Working with modern web standards and APIs",
      },
    },
    projects: {
      title: "Projects",
      subtitle: "My Projects",
      description: "A showcase of my recent work and technical achievements",
      featured: "Featured",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      healthtrack: {
        title: "HealthTrack",
        description: "A comprehensive health monitoring application with AI-powered insights",
      },
      taskmaster: {
        title: "TaskMaster",
        description: "A productivity tool for teams with real-time collaboration features",
      },
      devconnect: {
        title: "DevConnect",
        description: "A social network platform for developers to share projects and collaborate",
      },
      ecotracker: {
        title: "EcoTracker",
        description: "An application to track and reduce carbon footprint with personalized recommendations",
      },
    },
    blog: {
      title: "Blog",
      subtitle: "Recent Articles",
      description: "Sharing insights and experiences from my journey in tech",
      readArticle: "Read article",
      viewAll: "View All Articles",
    },
    contact: {
      title: "Contact",
      subtitle: "Get In Touch",
      description: "Have a project in mind? Let's discuss how I can help bring your ideas to life",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      orEmail: "Or drop me an email at",
    },
    footer: {
      description: "Freelance software engineer specializing in modern web technologies and startup solutions",
      links: "Links",
      contact: "Contact",
      social: "Social",
      available: "Available for freelance work and consulting",
      rights: "All rights reserved.",
    },
  },
}; 