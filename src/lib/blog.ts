// ========================================================
// BLOG.TS — Sistema de Conteúdo do Blog da Advocacia Kelly Carina
// Artigos especializados em Direito Previdenciário
// ========================================================

export interface BlogSection {
  id: string;
  title: string;
  content: string[];
  subsections?: {
    id: string;
    title: string;
    content: string[];
    listItems?: string[];
  }[];
  listItems?: string[];
  tipBox?: {
    title: string;
    text: string;
  };
  quote?: {
    text: string;
    author: string;
  };
}

// Categorias oficiais de artigos do Blog (Fonte única da verdade)
export const BLOG_TAXONOMY = [
  "Aposentadorias",
  "BPC / LOAS",
  "Incapacidade & Saúde",
  "Pensão por Morte",
  "Revisões",
] as const;

export type BlogCategory = typeof BLOG_TAXONOMY[number];

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  updatedDate: string;
  readingTime: string;
  author: {
    name: string;
    role: string;
    oab: string;
    avatar: string;
    bio: string;
  };
  coverImage: string;
  coverAlt: string;
  featured?: boolean;
  popular?: boolean;
  tags: string[];
  metaDescription: string;
  introduction: string[];
  sections: BlogSection[];
  conclusion: string[];
  ctaMiddleText?: string;
  faq?: { question: string; answer: string }[];
}

export const BLOG_CATEGORIES = [
  "Todas",
  ...BLOG_TAXONOMY,
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "planejamento-previdenciario-como-garantir-melhor-aposentadoria",
    title: "Planejamento Previdenciário: Como Garantir a Melhor Aposentadoria e Evitar Perdas no INSS",
    subtitle: "Entenda por que o planejamento detalhado pode aumentar o valor do seu benefício em até 40% e quando buscar orientação.",
    excerpt: "Descubra como o planejamento previdenciário analisa todas as regras de transição da Reforma, identifica erros no CNIS e projeta a data e o valor ideal da sua aposentadoria.",
    category: "Aposentadorias",
    date: "26 de Setembro de 2026",
    updatedDate: "26 de Setembro de 2026",
    readingTime: "6 min de leitura",
    featured: true,
    popular: true,
    tags: ["Planejamento Previdenciário", "Aposentadoria", "Regras de Transição", "INSS", "Cálculo Previdenciário"],
    coverImage: "/header_Desktop.jpeg",
    coverAlt: "Planejamento Previdenciário com a Advocacia Kelly Carina",
    author: {
      name: "Kelly Carina",
      role: "Advogada Especialista em Direito Previdenciário",
      oab: "OAB/PR 76.720",
      avatar: "/fotodeperfildaKelly.jpeg",
      bio: "Com mais de 10 anos de experiência jurídica, possui pós-graduações em Direito Previdenciário e Direito Aplicado. Atuação dedicada à defesa dos segurados do INSS em Curitiba, Paraná, Santa Catarina e São Paulo.",
    },
    metaDescription: "Saiba como o planejamento previdenciário previne prejuízos financeiros no INSS, acelera sua concessão e calcula o melhor momento para sua aposentadoria.",
    introduction: [
      "A aposentadoria é uma das conquistas financeiras mais importantes da vida do trabalhador brasileiro. No entanto, após a Emenda Constitucional 103 (Reforma da Previdência), pedir o benefício sem antes realizar uma análise prévia aprofundada pode resultar em perdas financeiras irreversíveis todos os meses.",
      "Muitos segurados acreditam que basta atingir a idade mínima ou o tempo de contribuição e dar entrada pelo aplicativo Meu INSS. Mas a verdade é que o sistema do INSS calcula automaticamente a regra mais imediata, e raramente ela é a mais vantajosa financeiramente para você.",
    ],
    sections: [
      {
        id: "o-que-e-planejamento",
        title: "1. O que é exatamente o Planejamento Previdenciário?",
        content: [
          "O planejamento previdenciário é um estudo minucioso e individualizado de todo o histórico de trabalho e contribuições do segurado. Ele vai muito além de uma simples contagem de tempo de serviço.",
          "Nesse estudo, a advogada especialista analisa todos os vínculos empregatícios, períodos de insalubridade ou periculosidade, tempo rural, serviço militar e contribuições como autônomo (contribuinte individual).",
        ],
        listItems: [
          "Identificação e correção de pendências no extrato previdenciário (CNIS).",
          "Simulação matemática de todas as regras de transição vigentes.",
          "Cálculo do Retorno Sobre o Investimento (ROI) de contribuições futuras.",
          "Previsão da data mais lucrativa para requerer a concessão do benefício.",
        ],
        tipBox: {
          title: "Atenção ao CNIS",
          text: "Mais de 80% dos extratos CNIS possuem indicadores de pendência (como PREM-EXT, PEXT ou pendências de remuneração) que travam o processo no INSS e diminuem a média salarial se não forem corrigidos antes do pedido.",
        },
      },
      {
        id: "erros-comuns-no-inss",
        title: "2. Os maiores erros de quem se aposenta sem orientação",
        content: [
          "A pressa em receber o primeiro pagamento é a maior armadilha enfrentada pelos segurados. Ao aceitar a primeira concessão concedida de forma automática pelo robô do INSS, o trabalhador pode perder o direito de optar por regras que pagariam valores substancialmente maiores.",
          "Além disso, após o saque do primeiro pagamento ou do FGTS rescisório decorrente da aposentadoria, o ato torna-se juridicamente irrevogável, não sendo mais possível cancelar a concessão.",
        ],
        subsections: [
          {
            id: "regras-de-transicao",
            title: "Diferença entre as Regras de Transição",
            content: [
              "Existem regras de transição com pedágio de 50%, pedágio de 100%, pontos e idade progressiva. Em muitos casos, esperar apenas 3 a 6 meses pode representar um acréscimo de R$ 800 a R$ 2.000 mensais na renda vitalícia.",
            ],
          },
        ],
        quote: {
          text: "Aposentar-se na hora certa é a diferença entre receber um benefício confortável para o resto da vida ou depender financeiramente de terceiros na velhice.",
          author: "Kelly Carina – Advogada Previdenciarista",
        },
      },
      {
        id: "quem-deve-fazer",
        title: "3. Quem deve fazer o planejamento previdenciário?",
        content: [
          "O planejamento não é indicado apenas para quem já está próximo de se aposentar. Quanto antes for iniciado, maior a economia financeira em guias de previdência desnecessárias ou recolhimentos abaixo do salário mínimo.",
        ],
        listItems: [
          "Homens a partir dos 45 anos e mulheres a partir dos 40 anos.",
          "Profissionais que trabalharam em ambientes insalubres (saúde, indústrias, ruído).",
          "Autônomos, empresários e prestadores de serviços PJ que recolhem carnês.",
          "Servidores públicos que transitaram entre regime próprio (RPPS) e regime geral (RGPS).",
          "Pessoas que possuem períodos rurais na juventude ou serviço militar.",
        ],
      },
    ],
    conclusion: [
      "Realizar um planejamento previdenciário é um investimento estratégico na sua tranquilidade e na segurança da sua família. Antes de protocolar qualquer pedido administrativo no Meu INSS, consulte uma assessoria jurídica qualificada para avaliar os seus documentos e apresentar o panorama numérico exato do seu caso.",
    ],
    ctaMiddleText: "Tem dúvidas sobre o seu tempo de contribuição ou regras de transição? Converse com a nossa equipe especializada e tire suas dúvidas.",
    faq: [
      {
        question: "Quanto tempo antes da aposentadoria devo fazer o planejamento?",
        answer: "O ideal é fazer entre 2 a 5 anos antes da data prevista. No entanto, se você já atingiu a idade mínima ou tempo mínimo, o planejamento é urgente para evitar pedidos com valor reduzido.",
      },
      {
        question: "O planejamento previdenciário pode ser feito à distância?",
        answer: "Sim! Atendemos clientes de Curitiba, todo o Paraná, Santa Catarina, São Paulo e residentes no exterior de forma 100% digital e segura.",
      },
    ],
  },
  {
    slug: "bpc-loas-quem-tem-direito-sem-contribuir-inss",
    title: "BPC/LOAS em 2026: Quem Tem Direito ao Benefício sem Ter Contribuído para o INSS?",
    subtitle: "Conheça as regras atualizadas, o critério de renda familiar e como comprovar a necessidade perante o órgão.",
    excerpt: "Guia completo sobre o Benefício de Prestação Continuada (BPC/LOAS): requisitos para idosos a partir de 65 anos e pessoas com deficiência de qualquer idade.",
    category: "BPC / LOAS",
    date: "24 de Setembro de 2026",
    updatedDate: "24 de Setembro de 2026",
    readingTime: "5 min de leitura",
    popular: true,
    tags: ["BPC", "LOAS", "Idosos", "Pessoa com Deficiência", "CadÚnico", "INSS"],
    coverImage: "/header_mobile.jpeg",
    coverAlt: "Benefício de Prestação Continuada BPC LOAS",
    author: {
      name: "Kelly Carina",
      role: "Advogada Especialista em Direito Previdenciário",
      oab: "OAB/PR 76.720",
      avatar: "/fotodeperfildaKelly.jpeg",
      bio: "Advogada atuante no Direito Previdenciário, com foco na garantia de benefícios assistenciais e defesa das famílias em situação de vulnerabilidade.",
    },
    metaDescription: "Descubra como solicitar o BPC/LOAS no valor de 1 salário mínimo mesmo sem ter contribuído para a Previdência Social.",
    introduction: [
      "O Benefício de Prestação Continuada (BPC), regulamentado pela Lei Orgânica da Assistência Social (LOAS), é uma das garantias fundamentais para cidadãos brasileiros em situação de extrema vulnerabilidade social.",
      "Diferente das aposentadorias tradicionais, o BPC não exige nenhum recolhimento prévio ao INSS. Ou seja: você não precisa ter trabalhado com carteira assinada nem pago carnê para ter direito a receber mensalmente um salário mínimo.",
    ],
    sections: [
      {
        id: "requisitos-bpc",
        title: "1. Quais são os requisitos para ter direito ao BPC/LOAS?",
        content: [
          "Para ter acesso ao benefício assistencial, o solicitante deve se enquadrar em um dos dois grupos protegidos pela legislação:",
        ],
        listItems: [
          "Idosos com 65 anos ou mais que comprovem baixa renda.",
          "Pessoas com deficiência (física, mental, intelectual ou sensorial) de qualquer idade, com impedimentos de longo prazo (mínimo de 2 anos).",
        ],
        tipBox: {
          title: "Inscrição Obrigatória no CadÚnico",
          text: "O solicitante e toda a sua família devem estar devidamente cadastrados e com dados atualizados no Cadastro Único (CadÚnico) nos últimos dois anos junto ao CRAS da sua cidade.",
        },
      },
      {
        id: "criterio-de-renda",
        title: "2. Como funciona o cálculo da renda por pessoa da família?",
        content: [
          "A lei estabelece que a renda familiar per capita mensal deve ser igual ou inferior a 1/4 (25%) do salário mínimo por pessoa.",
          "Contudo, a Justiça já pacificou o entendimento de que despesas contínuas com medicamentos, tratamentos, fraldas geriátricas e alimentação especial podem ser deduzidas desse cálculo, viabilizando a concessão mesmo quando a renda bruta aparenta ultrapassar o teto legal.",
        ],
      },
      {
        id: "negativa-inss",
        title: "3. O que fazer se o INSS indeferir o BPC/LOAS?",
        content: [
          "O índice de indeferimento administrativo no INSS para o BPC é bastante expressivo, seja por falha no enquadramento social ou por perícia médica superficial. Nesses casos, uma ação judicial com laudo pericial nomeado pelo juiz costuma ser a via mais eficaz para garantir o direito retroativo desde a data do primeiro pedido.",
        ],
      },
    ],
    conclusion: [
      "Se você ou alguém da sua família se enquadra nos requisitos do BPC/LOAS, não hesite em buscar suporte jurídico especializado para organizar o histórico médico e social antes de iniciar o protocolo.",
    ],
  },
  {
    slug: "auxilio-incapacidade-inss-negou-pericia-o-que-fazer",
    title: "Auxílio por Incapacidade Temporária: O que Fazer se o INSS Negar o Benefício?",
    subtitle: "Passo a passo para contestar o laudo pericial administrativo e reverter a decisão com ação na Justiça Federal.",
    excerpt: "Saiba como comprovar a incapacidade laborativa, reunir laudos médicos conclusivos e recuperar os pagamentos retroativos após a negativa na perícia do INSS.",
    category: "Incapacidade & Saúde",
    date: "20 de Setembro de 2026",
    updatedDate: "20 de Setembro de 2026",
    readingTime: "5 min de leitura",
    popular: true,
    tags: ["Auxílio Doença", "Benefício por Incapacidade", "Perícia INSS", "Laudo Médico", "Justiça Federal"],
    coverImage: "/header_Desktop2.jpg",
    coverAlt: "Benefício por Incapacidade Temporária INSS",
    author: {
      name: "Kelly Carina",
      role: "Advogada Especialista em Direito Previdenciário",
      oab: "OAB/PR 76.720",
      avatar: "/fotodeperfildaKelly.jpeg",
      bio: "Especialista em reverter negativas de auxílios e aposentadorias por invalidez, assegurando dignidade e amparo financeiro a segurados incapacitados.",
    },
    metaDescription: "Teve o auxílio por incapacidade (auxílio-doença) negado pelo perito do INSS? Veja como entrar com recurso ou ação judicial e receber os atrasados.",
    introduction: [
      "Estar incapacitado para o trabalho por motivo de doença ou acidente e receber uma resposta negativa na perícia médica do INSS é uma situação angustiante que atinge milhares de trabalhadores todos os dias.",
      "Geralmente, o perito administrativo gasta menos de 5 minutos avaliando exames complexos e emite a conclusão padrão de 'não constatação de incapacidade laborativa'. Mas saiba que essa decisão não é a palavra final da lei.",
    ],
    sections: [
      {
        id: "motivos-negativa",
        title: "1. Principais motivos de indeferimento pelo INSS",
        content: [
          "Compreender o motivo exato apontado na comunicação de decisão é o primeiro passo para traçar a melhor estratégia de contestação.",
        ],
        listItems: [
          "Falta de qualidade de segurado ou carência mínima de 12 contribuições.",
          "Alegação de que a doença é pré-existente ao ingresso no regime.",
          "Laudos médicos desatualizados ou sem indicação precisa do CID e período de afastamento.",
          "Equívoco do perito na correlação entre a enfermidade e a função exercida pelo trabalhador.",
        ],
      },
      {
        id: "documentos-fundamentais",
        title: "2. Documentos médicos que fazem a diferença",
        content: [
          "Para comprovar a incapacidade diante de um juiz ou perito judicial, os documentos devem conter detalhes específicos:",
        ],
        listItems: [
          "Atestado recente com CID, assinatura médica e carimbo legível do CRM.",
          "Prontuários e relatórios detalhando limitações funcionais específicas para a profissão.",
          "Exames de imagem (ressonâncias, tomografias, radiografias) acompanhados dos laudos.",
          "Receituários médicos comprovando o uso de medicamentos contínuos e tratamentos em andamento.",
        ],
      },
      {
        id: "via-judicial",
        title: "3. Por que a via judicial é muito mais segura?",
        content: [
          "Na Justiça Federal, a perícia não é realizada por um médico generalista do INSS, mas sim por um perito especialista nomeado pelo juiz (ortopedista, psiquiatra, cardiologista, etc.). Além disso, a advogada formula quesitos técnicos direcionados que o perito é obrigado a responder.",
          "Ao obter a sentença favorável, o trabalhador recebe todos os meses atrasados desde a data em que o pedido foi indevidamente negado no posto do INSS.",
        ],
      },
    ],
    conclusion: [
      "Não desista do seu direito caso sua perícia tenha sido recusada. Procure uma advogada especialista para analisar o seu caso e iniciar as medidas cabíveis para restabelecer o seu sustento.",
    ],
  },
  {
    slug: "pensao-por-morte-regras-calculo-duracao-dependentes",
    title: "Pensão por Morte: Regras de Cálculo, Duração do Benefício e Direitos dos Dependentes",
    subtitle: "Entenda as cotas de pagamento introduzidas pela Reforma e o que é necessário para comprovar dependência econômica e união estável.",
    excerpt: "Saiba quem tem direito à pensão por morte do INSS, por quanto tempo o benefício é pago ao cônjuge e como comprovar união estável sem certidão de casamento.",
    category: "Pensão por Morte",
    date: "15 de Setembro de 2026",
    updatedDate: "15 de Setembro de 2026",
    readingTime: "7 min de leitura",
    tags: ["Pensão por Morte", "Dependentes", "União Estável", "Reforma Previdência", "INSS"],
    coverImage: "/header_Desktop.jpeg",
    coverAlt: "Pensão por Morte Direito Previdenciário",
    author: {
      name: "Kelly Carina",
      role: "Advogada Especialista em Direito Previdenciário",
      oab: "OAB/PR 76.720",
      avatar: "/fotodeperfildaKelly.jpeg",
      bio: "Advogada previdenciarista com dedicação especial ao amparo de viúvas, viúvos e órfãos na concessão célere de pensões por morte.",
    },
    metaDescription: "Confira as regras completas da pensão por morte do INSS: cálculo por cotas, tempo de duração por idade do cônjuge e comprovação de dependência.",
    introduction: [
      "O falecimento de um ente querido é um momento de extrema dor e vulnerabilidade. Além do luto, a família frequentemente precisa lidar com a perda imediata da principal fonte de renda da residência.",
      "A pensão por morte é o benefício previdenciário destinado aos dependentes do segurado que veio a falecer. Contudo, as novas regras trouxeram alterações profundas no percentual pago e no tempo de duração do benefício.",
    ],
    sections: [
      {
        id: "quem-sao-dependentes",
        title: "1. Quem são os dependentes com direito à pensão?",
        content: [
          "A lei divide os dependentes em classes prioritárias, sendo que a existência de dependentes de uma classe exclui os das classes seguintes:",
        ],
        listItems: [
          "Classe 1 (Dependência presumida): Cônjuge, companheiro(a) em união estável e filhos menores de 21 anos ou inválidos/com deficiência.",
          "Classe 2 (Necessita comprovação econômica): Pais do segurado falecido.",
          "Classe 3 (Necessita comprovação econômica): Irmãos menores de 21 anos ou inválidos/com deficiência.",
        ],
      },
      {
        id: "calculo-por-cotas",
        title: "2. Como é calculado o valor da pensão hoje?",
        content: [
          "Desde a Reforma da Previdência, o valor da pensão começa em uma cota familiar de 50%, acrescida de 10% por dependente, até o limite de 100%. Por exemplo:",
        ],
        listItems: [
          "Viúva(o) sem filhos menores: recebe 60% do valor da aposentadoria ou do que o segurado teria direito se fosse aposentado por invalidez.",
          "Viúva(o) com 1 filho menor: recebe 70% (50% base + 10% + 10%).",
          "Viúva(o) com 2 filhos menores: recebe 80%.",
          "Viúva(o) com 4 ou mais filhos: recebe 100%.",
        ],
        tipBox: {
          title: "Garantia do Salário Mínimo",
          text: "Se a pensão por morte for a única fonte de renda formal daquele dependente, o valor final total nunca poderá ser inferior ao salário mínimo nacional vigente.",
        },
      },
    ],
    conclusion: [
      "A comprovação de união estável sem papel passado exige testemunhas idôneas e documentos em conjunto (conta conjunta, mesmo endereço, certidão de filhos, plano de saúde). Busque orientação jurídica para assegurar o benefício sem atrasos burocráticos.",
    ],
  },
  {
    slug: "aposentadoria-especial-profissionais-saude-ppp-ltcat",
    title: "Aposentadoria Especial para Profissionais da Saúde: Como Comprovar com PPP e LTCAT",
    subtitle: "Médicos, enfermeiros, dentistas e técnicos: regras exclusivas e conversão de tempo especial em comum.",
    excerpt: "Saiba como médicos, dentistas, enfermeiros e auxiliares de saúde podem antecipar a aposentadoria e comprovar a exposição a agentes biológicos nocivos.",
    category: "Aposentadorias",
    date: "10 de Setembro de 2026",
    updatedDate: "10 de Setembro de 2026",
    readingTime: "6 min de leitura",
    tags: ["Aposentadoria Especial", "Profissionais da Saúde", "PPP", "LTCAT", "Agentes Biológicos"],
    coverImage: "/header_Desktop2.jpg",
    coverAlt: "Aposentadoria Especial Saúde",
    author: {
      name: "Kelly Carina",
      role: "Advogada Especialista em Direito Previdenciário",
      oab: "OAB/PR 76.720",
      avatar: "/fotodeperfildaKelly.jpeg",
      bio: "Especialista em contagem de tempo insalubre e concessão de Aposentadoria Especial para profissionais de ambientes hospitalares e laboratoriais.",
    },
    metaDescription: "Guia da Aposentadoria Especial para a área da saúde: saiba como analisar seu PPP, converter tempo trabalhado antes de 2019 e garantir o melhor benefício.",
    introduction: [
      "Profissionais que dedicam suas vidas à saúde pública e privada convivem diariamente com riscos biológicos invisíveis: vírus, bactérias, fungos e materiais infectocontagiantes. Por conta disso, a legislação previdenciária confere a esses trabalhadores o direito à Aposentadoria Especial.",
      "Com 25 anos de atividade especial comprovada, é possível obter a aposentadoria ou utilizar esse tempo com acréscimo de 40% (homens) ou 20% (mulheres) para antecipar a aposentadoria por tempo de contribuição.",
    ],
    sections: [
      {
        id: "documentos-exigidos",
        title: "1. Documentos essenciais: PPP e LTCAT",
        content: [
          "O Perfil Profissiográfico Previdenciário (PPP) é o documento chave emitido pelo hospital, clínica ou laboratório, com base no Laudo Técnico das Condições Ambientais de Trabalho (LTCAT).",
          "Muitas vezes, as empresas preenchem o PPP de forma genérica, omitindo a exposição a microrganismos ou assinalando indevidamente que o Equipamento de Proteção Individual (EPI) é '100% eficaz'. Na via judicial, a jurisprudência já pacificou que o EPI não descaracteriza a nocividade biológica.",
        ],
      },
    ],
    conclusion: [
      "Se você atua na área da saúde há mais de 10, 15 ou 20 anos, submeta seus PPPs a uma avaliação jurídica minuciosa para não perder anos preciosos de contagem especial.",
    ],
  },
  {
    slug: "revisao-da-vida-toda-e-revisoes-inss-vale-a-pena",
    title: "Revisões de Benefícios do INSS: Quais Teses Ainda Valem a Pena Analisar?",
    subtitle: "Conheça as principais revisões ativas: inclusão de ações trabalhistas, atividades concomitantes e erro de cálculo.",
    excerpt: "Entenda o cenário atual das revisões previdenciárias e saiba como descobrir se o valor da sua aposentadoria foi concedido abaixo do devido.",
    category: "Revisões",
    date: "05 de Setembro de 2026",
    updatedDate: "05 de Setembro de 2026",
    readingTime: "5 min de leitura",
    tags: ["Revisão de Benefício", "Revisão da Vida Toda", "Atividades Concomitantes", "INSS", "Atrasados"],
    coverImage: "/fotodeperfildaKelly.jpeg",
    coverAlt: "Revisão de Aposentadoria e Benefícios do INSS",
    author: {
      name: "Kelly Carina",
      role: "Advogada Especialista em Direito Previdenciário",
      oab: "OAB/PR 76.720",
      avatar: "/fotodeperfildaKelly.jpeg",
      bio: "Advogada dedicada a auditorias minuciosas de cartas de concessão do INSS para identificar direitos suprimidos e reajustar benefícios defasados.",
    },
    metaDescription: "Saiba quando vale a pena pedir a revisão da sua aposentadoria no INSS e quais são as teses de revisão mais seguras e vantajosas na atualidade.",
    introduction: [
      "Após a concessão da aposentadoria, o segurado tem um prazo decadencial de até 10 anos para apontar eventuais erros de cálculo cometidos pelo INSS e solicitar a revisão do valor recebido mensalmente.",
      "Identificar se uma revisão é vantajosa exige cálculos atuariais precisos, pois entrar com um pedido infundado pode, em casos raros, resultar na redução do benefício. Por isso, a auditoria jurídica prévia é indispensável.",
    ],
    sections: [
      {
        id: "revisoes-mais-comuns",
        title: "1. Principais modalidades de revisão vantajosas",
        content: [
          "Dentre as dezenas de possibilidades de revisão, algumas se destacam pela alta taxa de sucesso:",
        ],
        listItems: [
          "Revisão por Inclusão de Sentença Trabalhista: averbação de vínculos ou salários reconhecidos na Justiça do Trabalho.",
          "Revisão das Atividades Concomitantes: para quem teve dois empregos simultâneos (ex: professores, médicos e enfermeiros).",
          "Revisão do Teto Previdenciário: para benefícios concedidos com salários limitados ao teto entre 1988 e 2003.",
          "Revisão de Erro de Fato: quando o INSS simplesmente desconsiderou períodos de carteira ou carnês constantes nos autos.",
        ],
      },
    ],
    conclusion: [
      "Verifique a data do primeiro pagamento do seu benefício. Se ainda não se passaram 10 anos, pode haver um montante expressivo de atrasados esperando para ser recuperado.",
    ],
  },
];
