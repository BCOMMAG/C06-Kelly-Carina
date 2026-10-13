// =========================================================================
// DATA.TS — ADVOCACIA KELLY CARINA (PADRÃO C26/C27 APERFEIÇOADO)
// Fonte única da verdade: dados institucionais, especialidades, artigos didáticos,
// depoimentos reais do Google Reviews e FAQ.
// =========================================================================

export interface OfficeInfo {
  name: string;
  shortName: string;
  lawyer: string;
  oab: string;
  role: string;
  tagline: string;
  slogan: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  whatsappUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  facebookUrl: string;
  address: string;
  addressShort: string;
  city: string;
  state: string;
  zip: string;
  mapsDirectionsUrl: string;
  mapsEmbedUrl: string;
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export const OFFICE_INFO: OfficeInfo = {
  name: "Advocacia Kelly Carina",
  shortName: "Kelly Carina Advocacia",
  lawyer: "Dra. Kelly Carina da Silva",
  oab: "OAB/PR 76.720",
  role: "Advogada Especialista em Direito Previdenciário",
  tagline: "Defesa ágil, estratégica e humanizada dos seus direitos perante o INSS e a Justiça Federal.",
  slogan: "Defendendo seus direitos, cuidando do seu futuro com excelência técnica e acolhimento humano.",
  phone: "(41) 99870-2590",
  phoneRaw: "5541998702590",
  whatsapp: "5541998702590",
  whatsappNumber: "5541998702590",
  whatsappFormatted: "(41) 99870-2590",
  whatsappUrl:
    "https://wa.me/5541998702590?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Advocacia%20Kelly%20Carina%20e%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20sobre%20meu%20benef%C3%ADcio.",
  instagramUrl: "https://instagram.com/kellycarinaadv",
  instagramHandle: "@kellycarinaadv",
  facebookUrl: "https://facebook.com/kellycarinaadvogada",
  address: "Rua das Carmelitas, 586 - Sala 04 - Boqueirão, Curitiba - PR, 81650-000",
  addressShort: "Rua das Carmelitas, 586 - Sl 04 - Curitiba/PR",
  city: "Curitiba",
  state: "PR",
  zip: "81650-000",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Rua+das+Carmelitas+586+Sala+04+Curitiba+PR+81650-000",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Rua+das+Carmelitas+586+Curitiba+PR&output=embed",
  schedule: {
    weekdays: "Segunda a Sexta: 09:00 às 17:00 (Presencial & Online com Agendamento)",
    saturday: "Fechado (Plantão sob Consulta)",
    sunday: "Fechado",
  },
};

export interface LawyerProfile {
  name: string;
  role: string;
  graduation: string;
  oab: string;
  experienceYears: string;
  bio: string[];
  careerHighlights: string[];
  personalNotes: string[];
  differentials: string[];
}

export const LAWYER_PROFILE: LawyerProfile = {
  name: "Dra. Kelly Carina da Silva",
  role: "Advogada Titular • Especialista em Direito Previdenciário",
  graduation: "Pós-graduada em Direito Previdenciário e Pós-graduada em Direito Aplicado",
  oab: "OAB/PR 76.720",
  experienceYears: "Mais de 10 Anos",
  bio: [
    "A Dra. Kelly Carina da Silva (OAB/PR 76.720) dedica sua carreira à advocacia previdenciária de alta precisão, atuando com firmeza e sensibilidade na defesa dos segurados do INSS, trabalhadores urbanos e rurais, servidores e dependentes.",
    "Com mais de uma década de experiência prática, possui especialização acadêmica aprofundada com Pós-graduação em Direito Previdenciário e Pós-graduação em Direito Aplicado, mantendo constante atualização frente às complexas transformações das regras pós-Reforma da Previdência (EC 103/2019).",
    "Com sede física estruturada em Curitiba/PR na Rua das Carmelitas e plataforma digital para atendimento em todo o Paraná e território nacional, destaca-se pela transparência inegociável, comunicação didática e combate incansável a negativas indevidas de benefícios.",
  ],
  careerHighlights: [
    "Mais de 10 anos de prática ininterrupta exclusiva no Direito Previdenciário.",
    "Pós-graduada em Direito Previdenciário com foco em Cálculos e Revisões.",
    "Pós-graduada em Direito Aplicado pela EMAP.",
    "Registro Profissional ativo: OAB/PR 76.720.",
    "Sede física consolidada na Rua das Carmelitas 586, Sala 04, Curitiba/PR.",
    "Atuação ética em estrita conformidade com o Provimento nº 205/2021 do Conselho Federal da OAB.",
  ],
  personalNotes: [
    "Acolhimento humanizado: cada cliente tem sua história de vida e trabalho tratada com o máximo respeito.",
    "Didática e clareza: explicação descomplicada sobre regras de transição, sem 'juridiquês'.",
    "Acompanhamento direto e transparente: atualização contínua do andamento de cada processo.",
  ],
  differentials: [
    "Cálculos Previdenciários de Alta Precisão: simulação do melhor benefício antes do protocolo.",
    "Reversão de Negativas & Altas Programadas: combate técnico a laudos periciais superficiais do INSS.",
    "Atendimento Híbrido Completo: estrutura física para acolhimento presencial e processo eletrônico em todo o Brasil.",
    "Foco em Resultados Reais: busca incansável pela maior renda mensal legalmente devida.",
  ],
};

export interface Pillar {
  id: string;
  metric: string;
  title: string;
  description: string;
  iconName: string;
}

export const INSTITUTIONAL_PILLARS: Pillar[] = [
  {
    id: "experiencia",
    metric: "+10 Anos",
    title: "Prática Jurídica Dedicada",
    description: "Atuação sólida e consistente na defesa dos segurados perante o INSS e a Justiça Federal.",
    iconName: "Award",
  },
  {
    id: "especializacao",
    metric: "100%",
    title: "Foco Previdenciário",
    description: "Dupla pós-graduação e dedicação integral a concessões, revisões e restabelecimento de auxílios.",
    iconName: "ShieldCheck",
  },
  {
    id: "precisao",
    metric: "Alta Precisão",
    title: "Cálculos Estratégicos",
    description: "Auditoria detalhada do CNIS e simulação criteriosa para garantir a aposentadoria mais vantajosa.",
    iconName: "Scale",
  },
  {
    id: "avaliacao",
    metric: "5.0 ★",
    title: "Google Reviews",
    description: "Avaliação máxima com 13 depoimentos espontâneos de clientes satisfeitos pelo atendimento acolhedor.",
    iconName: "UserCheck",
  },
];

export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  description: string;
  iconName: string;
  featured: boolean;
  highlightText: string;
  coverageList: string[];
  casesSummary: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "aposentadorias-urbanas-rurais",
    number: "01",
    title: "Aposentadorias (Idade, Tempo e Transições)",
    subtitle: "Concessão e planejamento estratégico nas regras pré e pós-Reforma da Previdência (EC 103/2019)",
    shortDesc:
      "Planejamento completo e pedidos para aposentadoria por idade, tempo de contribuição, pontos e pedágios de 50% e 100%.",
    description:
      "A Reforma da Previdência extinguiu a aposentadoria por tempo pura e criou múltiplas regras de transição. Realizamos o levantamento minucioso de cada vínculo no CNIS, averbação de tempo rural, serviço militar e conversão de tempo especial para identificar a regra mais rápida e financeiramente favorável para você.",
    iconName: "Scale",
    featured: true,
    highlightText: "Identificação exata do momento certo de se aposentar com o maior valor de benefício possível.",
    coverageList: [
      "Aposentadoria por Idade Urbana (62 anos Mulher / 65 anos Homem)",
      "Regras de Transição: Sistema de Pontos e Idade Mínima Progressiva",
      "Regras de Pedágio de 50% e Pedágio de 100% com Remuneração Integral",
      "Reconhecimento e Averbação de Tempo de Trabalho Rural e Regime de Economia Familiar",
      "Averbação de Tempo de Serviço Militar e Aluno-Aprendiz",
      "Regularização de Pendências, Indicadores e Vínculos Extemporâneos no CNIS",
      "Descarte de Contribuições Prejudiciais para Elevação da Média Salarial",
    ],
    casesSummary:
      "Auxiliamos trabalhadores que estão próximos de se aposentar a evitar prejuízos irreversíveis ao aceitar o primeiro cálculo automatizado do robô do INSS.",
  },
  {
    id: "auxilio-doenca-incapacidade",
    number: "02",
    title: "Auxílio-Doença & Incapacidade Temporária",
    subtitle: "Reversão de altas programadas indevidas e perícias médicas rigorosas",
    shortDesc:
      "Afastamento e restabelecimento de benefício para quem está incapacitado de trabalhar por doença ou acidente.",
    description:
      "Milhares de trabalhadores recebem alta programada do INSS mesmo debilitados e com laudos médicos atestando inaptidão. Atuamos com agilidade em pedidos de prorrogação, recursos e ações judiciais com perícia médica com perito especialista neutro, além de assegurar o correto enquadramento entre auxílio comum (B31) e acidentário (B91 com garantia de FGTS e estabilidade).",
    iconName: "ShieldAlert",
    featured: true,
    highlightText: "Combate contundente a perícias superficiais do INSS e proteção da estabilidade acidentária.",
    coverageList: [
      "Pedido e Prorrogação de Benefício por Incapacidade Temporária (B31)",
      "Enquadramento de Auxílio-Doença Acidentário (B91) por Doença Ocupacional ou Trajeto",
      "Reversão Judicial de Altas Programadas com Concessão de Liminar",
      "Isenção de Carência para Doenças Graves Previstas em Lei (Câncer, Cardiopatias, etc.)",
      "Garantia de Depósitos de FGTS e Estabilidade Provisória de 12 meses no Emprego",
      "Defesa Contra o 'Limbo Jurídico Previdenciário-Trabalhista'",
    ],
    casesSummary:
      "Garantimos que o segurado doente não fique desamparado sem salário da empresa e sem pagamento do INSS.",
  },
  {
    id: "aposentadoria-invalidez",
    number: "03",
    title: "Aposentadoria por Invalidez & Adicional de 25%",
    subtitle: "Incapacidade permanente com acréscimo para segurados que necessitam de cuidados de terceiros",
    shortDesc:
      "Benefício definitivo para quem não pode retornar à sua atividade nem ser reabilitado em outra função.",
    description:
      "Quando a incapacidade se torna total, definitiva e insuscetível de recuperação profissional, o segurado tem direito à Aposentadoria por Incapacidade Permanente. Defendemos judicialmente o direito ao cálculo integral (100%) em casos de origem acidentária/ocupacional e pleiteamos o Adicional de 25% (Grande Invalidez) para quem precisa de ajuda diária permanente.",
    iconName: "HeartHandshake",
    featured: false,
    highlightText: "Garantia de renda vitalícia e adicional de 25% mesmo além do teto do INSS para cuidados especiais.",
    coverageList: [
      "Conversão de Auxílio-Doença em Aposentadoria por Incapacidade Permanente",
      "Ação Judicial com Prova Pericial Biopsicossocial e Médica",
      "Cálculo com Coeficiente Integral (100%) para Acidentes de Trabalho e Doenças Profissionais",
      "Pedido do Adicional de 25% para Assistência Permanente de Terceiros (Grande Invalidez)",
      "Defesa em Convocatórias de Pente-Fino do INSS para Segurados Aposentados",
    ],
    casesSummary:
      "Atuação célere para assegurar dignidade ao trabalhador que perdeu permanentemente sua capacidade produtiva.",
  },
  {
    id: "bpc-loas-idoso-pcd",
    number: "04",
    title: "BPC / LOAS (Idosos & Pessoa com Deficiência)",
    subtitle: "Benefício assistencial de 1 salário mínimo sem exigência de contribuição prévia ao INSS",
    shortDesc:
      "Garantia de 1 salário mínimo mensal para idosos a partir de 65 anos e pessoas com deficiência ou autismo em vulnerabilidade.",
    description:
      "O BPC/LOAS assegura subsistência para quem nunca conseguiu contribuir regularmente. Exige comprovação de vulnerabilidade familiar (com flexibilização judicial de gastos com medicamentos, fraldas e tratamentos contínuos) e avaliação de longo prazo para PCDs, incluindo amplo reconhecimento judicial para crianças e jovens no Transtorno do Espectro Autista (TEA).",
    iconName: "FileCheck",
    featured: true,
    highlightText: "Direito de 1 salário mínimo mensal assegurado para famílias que enfrentam custos pesados de saúde.",
    coverageList: [
      "BPC/LOAS Idoso: Concessão a partir dos 65 anos sem carência",
      "BPC/LOAS Deficiência: Amplo atendimento a crianças e adultos no Espectro Autista (TEA)",
      "Laudos Sociais e Médicos para Doenças Crônicas, Paralisia e Síndromes Raras",
      "Dedução Judicial de Gastos com Remédios e Fraldas para Cálculo da Renda Per Capita",
      "Regularização e Orientações Cruciais sobre o CadÚnico no CRAS",
      "Reversão de Cancelamentos Indevidos por Acúmulo de Pequenos Rendimentos Familiares",
    ],
    casesSummary:
      "Especialistas no acolhimento de famílias atípicas para viabilizar suporte financeiro fundamental à rotina terapêutica.",
  },
  {
    id: "pensao-por-morte",
    number: "05",
    title: "Pensão por Morte & Dependentes",
    subtitle: "Proteção financeira à família, união estável e reversão de indeferimentos injustos",
    shortDesc:
      "Direito de cônjuges, companheiros, filhos e dependentes econômicos em caso de falecimento do segurado.",
    description:
      "A pensão por morte sofreu profundas mudanças de cotas pela Reforma da Previdência. O INSS frequentemente indefere o pedido alegando falta de certidão formal de casamento ou perda da qualidade de segurado. Demonstramos a união estável por farta prova documental e testemunhal, resgatamos o 'período de graça' e garantimos a justa divisão entre dependentes.",
    iconName: "ShieldCheck",
    featured: false,
    highlightText: "Comprovação robusta de união estável e resgate da qualidade de segurado para sustento familiar.",
    coverageList: [
      "Reconhecimento de União Estável perante o INSS e via Justificação Administrativa/Judicial",
      "Pensão para Filhos Menores de 21 anos ou Dependentes com Deficiência/Invalidez",
      "Comprovação do Período de Graça quando o falecido estava desempregado",
      "Cálculo Correto das Novas Cotas Familiares Pós-Reforma da Previdência",
      "Revisão de Divisão Indevida de Cotas entre Ex-Cônjuge e Companheira Atual",
    ],
    casesSummary:
      "Acolhemos a família no momento mais difícil, resolvendo a burocracia do INSS com celeridade e respeito.",
  },
  {
    id: "aposentadoria-especial",
    number: "06",
    title: "Aposentadoria Especial (Insalubridade & Periculosidade)",
    subtitle: "Tempo de serviço reduzido para quem trabalhou exposto a agentes nocivos à saúde",
    shortDesc:
      "Enquadramento especial para profissionais expostos a ruído, calor, produtos químicos, biológicos ou perigo.",
    description:
      "Profissionais da saúde, indústrias, vigilantes, metalúrgicos e eletricitários expostos a agentes nocivos têm direito à aposentadoria aos 15, 20 ou 25 anos de atividade especial, ou à conversão desse tempo em comum com bônus de 40% (homens) e 20% (mulheres) para o período anterior a 13/11/2019. Auditamos PPP e LTCAT para combater exigências abusivas do INSS.",
    iconName: "Clock",
    featured: false,
    highlightText: "Aproveitamento de todo o tempo insalubre trabalhado com acréscimo significativo na contagem geral.",
    coverageList: [
      "Auditoria Técnica de Formulários PPP (Perfil Profissiográfico Previdenciário) e LTCAT",
      "Aposentadoria Especial aos 25 Anos de Atividade para Médicos, Enfermeiros e Dentistas",
      "Reconhecimento de Ruído Acima dos Limites de Tolerância e Agentes Químicos Cancerígenos",
      "Reconhecimento de Periculosidade para Vigilantes e Eletricitários com Jurisprudência do STJ",
      "Conversão de Tempo Especial em Comum Trabalhado até a Reforma (Acréscimo de 40% ou 20%)",
    ],
    casesSummary:
      "Transformamos anos de trabalho pesado e insalubre em antecipação legal da sua aposentadoria com alto valor.",
  },
  {
    id: "auxilio-acidente-indenizatorio",
    number: "07",
    title: "Auxílio-Acidente (Indenização Vitalícia)",
    subtitle: "Benefício indenizatório de 50% para quem ficou com sequelas e voltou a trabalhar",
    shortDesc:
      "Indenização mensal paga pelo INSS que se acumula integralmente com o salário da empresa até a aposentadoria.",
    description:
      "O auxílio-acidente não impede o retorno ao trabalho! Ele é devido ao trabalhador que sofreu qualquer acidente (de trabalho, doméstico ou de trânsito) que deixou sequela definitiva redutora de sua capacidade de trabalho, como perda de movimentos, fraturas com limitações ou lesões por esforço repetitivo. O valor equivale a 50% do salário de benefício.",
    iconName: "Award",
    featured: false,
    highlightText: "Recebimento mensal garantido pelo INSS sem precisar deixar o emprego e com atrasados retroativos.",
    coverageList: [
      "Concessão Judicial do Auxílio-Acidente após a Alta do Auxílio-Doença",
      "Recebimento de 50% da Média Salarial Cumulado com o Salário na Carteira Assinada",
      "Aplicação para Acidentes de Qualquer Natureza (Trânsito, Doméstico ou Esportivo)",
      "Cobrança de Valores Retroativos não Pagos pelo INSS desde a Data de Cessação do Auxílio",
      "Integração do Valor do Auxílio-Acidente no Cálculo da Futura Aposentadoria",
    ],
    casesSummary:
      "Milhares de trabalhadores desconhecem esse direito e deixam de receber uma renda indenizatória vitalícia.",
  },
  {
    id: "planejamento-revisoes-cnis",
    number: "08",
    title: "Planejamento Previdenciário & Revisões de Valor",
    subtitle: "Cálculos matemáticos para corrigir erros do INSS e aumentar a renda mensal",
    shortDesc:
      "Auditoria minuciosa de cartas de concessão já aprovadas e planejamento preventivo para quem vai se aposentar.",
    description:
      "Estudos apontam que mais de 30% das cartas de concessão do INSS contêm erros de cálculo, desconsideração de salários maiores ou índices incorretes. Atuamos tanto no planejamento antecipado (evitando que você perca dinheiro) quanto em revisões judiciais (como a Revisão da Vida Toda, inclusão de sentenças trabalhistas e revisão do teto).",
    iconName: "FileCheck",
    featured: true,
    highlightText: "Elevação definitiva do valor da aposentadoria e recebimento de até 5 anos de atrasados com juros.",
    coverageList: [
      "Planejamento Previdenciário Completo com Estudo de Cenários e Retorno de Investimento (ROI)",
      "Auditoria de Cartas de Concessão de Benefícios Concedidos nos Últimos 10 Anos",
      "Inclusão de Verbas Salariais Reconhecidas em Reclamatórias Trabalhistas no CNIS",
      "Revisão das Melhores Contribuições e Descarte Estratégico de Salários Menores",
      "Revisão da Vida Toda e Revisão do Teto dos Benefícios Previdenciários",
      "Correção de Períodos Concomitantes de Trabalho (Dois Empregos Simultâneos)",
    ],
    casesSummary:
      "A certeza de que você não deixará nenhum real do que trabalhou uma vida inteira para trás nas mãos do INSS.",
  },
];

export interface EducationalArticle {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  oabDisclaimer: string;
}

export const ARTICLES: EducationalArticle[] = [
  {
    id: "artigo-alta-programada-pericias",
    number: "01",
    title: "Alta Programada do INSS: O Que Fazer Quando o Benefício é Cortado com Laudo Médico",
    category: "Benefícios por Incapacidade",
    readTime: "4 min de leitura",
    summary:
      "Entenda os procedimentos jurídicos para restabelecer o auxílio-doença cortado indevidamente e evitar o limbo previdenciário.",
    content: [
      "A prática da 'alta programada' consiste na fixação prévia de uma data de cessação do benefício de incapacidade temporária (auxílio-doença) pelo perito do INSS, sem a realização de nova avaliação clínica presencial.",
      "Quando a data estimada chega e o segurado permanece debilitado, a legislação assegura o direito de pedir a prorrogação nos 15 dias anteriores ao término. Caso o INSS indefira o pedido ou declare a capacidade indevidamente, o segurado não é obrigado a aceitar o encerramento.",
      "Por meio de ação judicial com pedido de tutela de urgência (liminar), é possível submeter o paciente a um perito médico judicial de confiança do tribunal, que analisa laudos atualizados, prontuários e exames de imagem de forma técnica e independente, restabelecendo o pagamento com direito a todos os retroativos.",
    ],
    oabDisclaimer:
      "Conteúdo puramente educativo com finalidade de orientação pública, em estrita observância ao Provimento 205/2021 da OAB.",
  },
  {
    id: "artigo-reforma-previdencia-regras",
    number: "02",
    title: "Regras de Transição da Reforma da Previdência: Como Escolher a Mais Vantajosa",
    category: "Aposentadorias",
    readTime: "5 min de leitura",
    summary:
      "Saiba como funcionam os pedágios de 50% e 100%, o sistema de pontos e como o robô do INSS pode reduzir sua aposentadoria.",
    content: [
      "A Emenda Constitucional nº 103/2019 instituiu cinco regras de transição para quem já contribuía antes da sua promulgação: pontos, idade mínima progressiva, pedágio de 50%, pedágio de 100% e regra de idade.",
      "A concessão automatizada do portal Meu INSS costuma conceder a primeira regra atingida pelo sistema, que muitas vezes aplica redutores severos (como o fator previdenciário ou 60% da média total), quando o trabalhador poderia receber valor integral se aguardasse poucas semanas ou optasse por outra regra.",
      "O Planejamento Previdenciário realiza a simulação matemática detalhada de cada cenário, orientando a data exata do requerimento e descartando contribuições baixas que puxam a média salarial para baixo.",
    ],
    oabDisclaimer:
      "Artigo informativo e de utilidade pública, elaborado nos termos do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "artigo-bpc-loas-autismo-idoso",
    number: "03",
    title: "BPC/LOAS para Autismo (TEA) e Idosos: Critérios de Renda e Decisões Judiciais",
    category: "Direito Assistencial",
    readTime: "4 min de leitura",
    summary:
      "Como a Justiça flexibiliza o limite de 1/4 do salário mínimo considerando gastos médicos contínuos com remédios e terapias.",
    content: [
      "O Benefício de Prestação Continuada (BPC/LOAS) garante um salário mínimo mensal para pessoas com deficiência e idosos a partir de 65 anos em situação de vulnerabilidade econômica, sem exigir contribuições ao INSS.",
      "Na via administrativa, o INSS rejeita sumariamente famílias cuja renda por pessoa supere 1/4 do salário mínimo. No entanto, o Supremo Tribunal Federal e os Tribunais Regionais Federais já consolidaram o entendimento de que despesas contínuas comprovadas com medicamentos, consultas, fraldas e alimentos especiais devem ser abatidas do cálculo familiar.",
      "Para crianças e jovens no Transtorno do Espectro Autista (TEA), o laudo de impedimento de longo prazo e as despesas com equipe multidisciplinar são determinantes para a concessão judicial rápida do benefício.",
    ],
    oabDisclaimer:
      "Material didático elaborado em estrita conformidade com as diretrizes do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "artigo-auxilio-acidente-cumulacao",
    number: "04",
    title: "Auxílio-Acidente: O Benefício do INSS que Você Pode Receber Sem Deixar de Trabalhar",
    category: "Benefícios Acidentários",
    readTime: "4 min de leitura",
    summary:
      "Entenda por que a sequela definitiva que reduziu sua capacidade dá direito a 50% da média salarial somada ao seu salário.",
    content: [
      "Ao contrário do auxílio-doença, o auxílio-acidente tem natureza estritamente indenizatória e não substitui a remuneração do trabalho. Ele é concedido após a consolidação das lesões decorrentes de qualquer acidente que reduza a capacidade habitual para a profissão.",
      "O segurado pode retornar normalmente à sua empresa, continuar com a carteira assinada e receber o salário normal junto com o auxílio-acidente pago todo mês pelo INSS até a véspera da sua aposentadoria.",
      "Além disso, quando o segurado vier a se aposentar no futuro, todos os valores recebidos a título de auxílio-acidente entram na base de cálculo para aumentar o valor da sua aposentadoria definitiva.",
    ],
    oabDisclaimer:
      "Conteúdo com finalidade estritamente pedagógica e informativa, em cumprimento às normas éticas da OAB.",
  },
  {
    id: "artigo-uniao-estavel-pensao-morte",
    number: "05",
    title: "Pensão por Morte em União Estável: Documentos Cruciais para Evitar o Indeferimento",
    category: "Pensão por Morte",
    readTime: "4 min de leitura",
    summary:
      "Como comprovar a vida a dois sem certidão de casamento formal e garantir o benefício após a perda do companheiro.",
    content: [
      "A ausência de escritura pública de união estável não retira o direito do companheiro ou companheira à pensão por morte, porém o INSS exige um início de prova material contemporânea dos últimos 24 meses antes do óbito.",
      "Documentos como contas bancárias conjuntas, declaração de imposto de renda constando o dependente, comprovantes de mesma residência, apólices de seguro de vida e certidão de nascimento de filhos em comum são aceitos para comprovar a união duradoura e pública.",
      "Na recusa do órgão previdenciário, a via judicial com audiência de justificação e oitiva de testemunhas é o caminho seguro para demonstrar a entidade familiar e restabelecer a pensão com retroativos integrais.",
    ],
    oabDisclaimer:
      "Texto puramente informativo com finalidade de esclarecimento social, em cumprimento ao Provimento 205/2021 da OAB.",
  },
];

export const EDUCATIONAL_TOPICS = ARTICLES;

export interface ReviewItem {
  id: string;
  name: string;
  text: string;
  rating: number;
  highlight: string;
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Silvana P. G. Stresser",
    text: "Atendimento excepcional. Clara e concisa, foi muito rápida em responder sobre dúvidas do processo. Profissional comprometida, super recomendo.",
    rating: 5,
    highlight: "Atendimento excepcional e rápido",
  },
  {
    id: "rev-2",
    name: "Deborah Schulcka",
    text: "Excelente advogada, tira todas as dúvidas, explica muito bem. Além das defesas sensacionais, super indico essa advogada maravilhosa!",
    rating: 5,
    highlight: "Defesas sensacionais e tira todas as dúvidas",
  },
  {
    id: "rev-3",
    name: "Bete Souza",
    text: "Excelente profissional, resolutiva e precisa no seu trabalho. Tem propriedade e conhecimento e muita dedicação em tudo que faz.",
    rating: 5,
    highlight: "Resolutiva e precisa no trabalho",
  },
  {
    id: "rev-4",
    name: "Vanessa Filgueira",
    text: "Atendimento de excelência, dedicada, eficiente, honesta, mantém um bom contato com o cliente. Super indico!",
    rating: 5,
    highlight: "Dedicada, honesta e eficiente",
  },
  {
    id: "rev-5",
    name: "Sabrina Bueno",
    text: "Kelly é uma advogada exemplar: muito solícita, didática e clara, eficiente! Meu caso foi resolvido com sucesso. Muito grata!",
    rating: 5,
    highlight: "Caso resolvido com sucesso e didática",
  },
  {
    id: "rev-6",
    name: "Karina Sanches da Paixão",
    text: "Excelente atendimento, dedicada, mantém sempre informado o andamento. Excelente profissional.",
    rating: 5,
    highlight: "Mantém sempre informado o andamento",
  },
  {
    id: "rev-7",
    name: "Deni Oda",
    text: "A Dra. é super competente, dá todo o suporte que precisamos no momento mais delicado. Ela é nota mil!",
    rating: 5,
    highlight: "Dá todo o suporte que precisamos",
  },
  {
    id: "rev-8",
    name: "Erica Pereira",
    text: "Excelente profissional, sempre disponível para responder todas as nossas dúvidas com paciência. Recomendo muito.",
    rating: 5,
    highlight: "Sempre disponível para responder dúvidas",
  },
  {
    id: "rev-9",
    name: "Gabriel Ramon",
    text: "Excelente advogada! Eficiente, combativa e super indico para quem busca resolver benefício no INSS.",
    rating: 5,
    highlight: "Eficiente e combativa no INSS",
  },
  {
    id: "rev-10",
    name: "Beth",
    text: "A mais competente e íntegra advogada previdenciária de toda Curitiba. Parabéns pelo trabalho impecável, Doutora!",
    rating: 5,
    highlight: "Competente e íntegra em Curitiba",
  },
  {
    id: "rev-11",
    name: "Jaqueline Alexandre",
    text: "Uma ótima profissional, muito atenciosa e clara no que diz respeito às leis. Super indico!",
    rating: 5,
    highlight: "Ótima profissional e muito atenciosa",
  },
  {
    id: "rev-12",
    name: "Vanessa Panace Lopes",
    text: "Ótima profissional, super recomendo para qualquer questão de aposentadoria e previdência!",
    rating: 5,
    highlight: "Super recomendo para aposentadoria",
  },
  {
    id: "rev-13",
    name: "Regilene Gonçalves",
    text: "Profissional super competente, dedicada do início ao fim. Recomendo de olhos fechados.",
    rating: 5,
    highlight: "Dedicada do início ao fim",
  },
];

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const WORK_PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "Atendimento & Análise do CNIS",
    subtitle: "Acolhimento imediato presencial ou via WhatsApp",
    description:
      "Você nos conta sua situação. Analisamos seu extrato do CNIS, carteiras de trabalho, laudos médicos e documentação para mapear cada período e direito adquirido.",
  },
  {
    number: "02",
    title: "Planejamento & Simulação",
    subtitle: "Cálculos matemáticos do melhor benefício",
    description:
      "Simulamos as regras de transição, descartamos contribuições desfavoráveis e montamos a estratégia jurídica ideal para alcançar a maior renda mensal possível.",
  },
  {
    number: "03",
    title: "Protocolo & Combate Técnico",
    subtitle: "Atuação no INSS e na Justiça Federal",
    description:
      "Cuidamos de toda a burocracia, elaboramos petições com suporte documental consistente, acompanhamos perícias médicas e combatemos negativas abusivas do INSS.",
  },
  {
    number: "04",
    title: "Concessão & Acompanhamento",
    subtitle: "Vitória, recebimento e transparência contínua",
    description:
      "Acompanhamos o processo até a liberação dos valores e conferimos a carta de concessão para garantir que você receba cada centavo do que tem direito.",
  },
];

export const WORK_STEPS = WORK_PROCESS_STEPS;

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  iconName: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "aposentadorias-regras",
    label: "Aposentadorias & Transição",
    iconName: "Scale",
    items: [
      {
        id: "faq-apo-1",
        question: "Como saber se já tenho direito de me aposentar pós-Reforma da Previdência?",
        answer:
          "O direito depende da sua idade, tempo de contribuição acumulado até a data da Reforma (13/11/2019) e enquadramento nas regras de transição (pontos, pedágio de 50%, pedágio de 100% ou idade mínima). Uma análise detalhada do CNIS e simulação profissional apontam a data exata e o valor de cada regra, evitando que você requeira prematuramente com perdas na remuneração.",
      },
      {
        id: "faq-apo-2",
        question: "O que é o descarte de contribuições e como ele aumenta o valor do benefício?",
        answer:
          "A Reforma permitiu excluir contribuições menores que reduzam a média salarial do trabalhador, desde que o tempo mínimo de contribuição legal seja mantido. Com esse cálculo estratégico, a média dos salários sobe consideravelmente, resultando em uma renda mensal inicial muito maior para o restante da vida.",
      },
      {
        id: "faq-apo-3",
        question: "Trabalhei na roça quando jovem. Posso somar esse tempo para me aposentar mais cedo?",
        answer:
          "Sim! O tempo de trabalho em regime de economia familiar rural pode ser reconhecido e averbado para fins de aposentadoria urbana a partir dos 12 anos de idade, sem necessidade de pagamento retroativo para o período anterior a 1991. Comprovamos o período com documentos da época dos pais (certidões, notas de produtor, contratos de arrendamento, certidões de batismo e casamento).",
      },
      {
        id: "faq-apo-4",
        question: "Como funciona a Aposentadoria Especial para quem trabalhou em ambiente insalubre?",
        answer:
          "Quem trabalhou exposto a ruído excessivo, agentes biológicos (hospitais), químicos (solventes, graxas) ou eletricidade tem direito a regras diferenciadas. O período trabalhado até 13/11/2019 pode ser convertido em comum com bônus de 40% (homens) e 20% (mulheres), antecipando em anos o direito à aposentadoria.",
      },
    ],
  },
  {
    id: "pericias-inss-negado",
    label: "Perícias & Negativas do INSS",
    iconName: "ShieldAlert",
    items: [
      {
        id: "faq-per-1",
        question: "O que fazer se o INSS negou meu auxílio-doença ou me deu alta antes de eu melhorar?",
        answer:
          "A decisão do perito do INSS não é definitiva! Você pode ingressar com ação judicial na Justiça Federal. Na Justiça, a perícia é realizada por um perito médico especialista neutro e nomeado pelo juiz, que examina com profundidade seus laudos, exames e limitações reais para o trabalho, permitindo a concessão com pagamento retroativo de todos os meses atrasados.",
      },
      {
        id: "faq-per-2",
        question: "A empresa não me deixa trabalhar e o INSS não me paga. O que é o 'limbo jurídico'?",
        answer:
          "O limbo previdenciário-trabalhista ocorre quando o médico da empresa recusa o retorno do trabalhador por considerá-lo inapto, mas o INSS nega o auxílio por considerá-lo apto. A jurisprudência consolidada determina que a empresa é responsável por pagar os salários enquanto não restabelecido o benefício, e atuamos simultaneamente na via judicial previdenciária e trabalhista para garantir a segurança financeira do trabalhador.",
      },
      {
        id: "faq-per-3",
        question: "Quem tem sequela de acidente pode receber o Auxílio-Acidente e continuar trabalhando?",
        answer:
          "Sim! O Auxílio-Acidente é uma indenização mensal de 50% paga pelo INSS que se acumula integralmente com o salário da carteira assinada. Ele é devido para quem sofreu qualquer tipo de acidente que deixou limitação ou sequela definitiva que reduza a capacidade de trabalho.",
      },
      {
        id: "faq-per-4",
        question: "Como funciona o BPC/LOAS para autismo e deficiências em famílias de baixa renda?",
        answer:
          "Pessoas diagnosticadas com Transtorno do Espectro Autista (TEA) ou deficiências de longo prazo têm direito a 1 salário mínimo mensal caso a família esteja em vulnerabilidade. Na Justiça, deduzimos gastos com remédios, fraldas e tratamentos para que a renda familiar se adeque aos requisitos legais.",
      },
    ],
  },
  {
    id: "atendimento-escritorio",
    label: "Atendimento & Localização",
    iconName: "MapPin",
    items: [
      {
        id: "faq-ate-1",
        question: "Onde fica o escritório e vocês atendem presencialmente em Curitiba?",
        answer:
          "Sim! Nossa sede física fica na Rua das Carmelitas, 586 - Sala 04, no bairro Boqueirão / Hauer em Curitiba/PR (CEP 81650-000), com ambiente privativo e acolhedor para consultas agendadas de segunda a sexta, das 09h às 17h.",
      },
      {
        id: "faq-ate-2",
        question: "Moro no interior do Paraná ou em outro Estado. Posso ser atendido à distância?",
        answer:
          "Com certeza! Hoje os processos no INSS e na Justiça Federal são 100% eletrônicos (Processo Judicial Eletrônico - PJe / Eproc). Realizamos atendimento completo e seguro por videochamada e WhatsApp com envio digital de documentos para clientes em todo o Brasil.",
      },
      {
        id: "faq-ate-3",
        question: "Quais documentos devo separar para a primeira análise do meu caso?",
        answer:
          "Para a primeira consulta é recomendável ter em mãos: documento de identidade (RG/CPF ou CNH), Carteiras de Trabalho (físicas ou digitais), extrato do CNIS baixado no Meu INSS e, se o caso for de benefício por incapacidade ou BPC, laudos médicos atualizados, exames, receitas e atestados com CID.",
      },
      {
        id: "faq-ate-4",
        question: "Como funciona a contratação e os honorários advocatícios?",
        answer:
          "Nossa atuação prima pela ética, transparência e respeito estrito ao Provimento 205/2021 da OAB. Apresentamos contrato claro de prestação de serviços detalhando os percentuais e etapas, geralmente condicionados ao êxito da concessão do benefício para segurados em situação de vulnerabilidade.",
      },
    ],
  },
];

export const FAQ_DATA = FAQ_CATEGORIES;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "O Escritório", href: "#sobre" },
  { label: "Pilares", href: "#pilares" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Artigos Didáticos", href: "#educativo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Como Atuamos", href: "#como-atuamos" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "#contato" },
  { label: "Links Bio", href: "/links" },
];
