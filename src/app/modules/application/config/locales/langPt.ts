import {LanguageModel} from '../language-model';

export const langPt: LanguageModel = {
  product: 'Xectra', // safe
  company: 'Xectra Digital', // safe
  desktop: {
    ribbon: {
      contacts: 'Contatos',
      settings: 'Configurações',
      someLongerText: 'Algum texto mais longo',
      catalogues: 'Catálogos',
      multiSelect: 'Seleção múltipla',
      ghost: 'Fantasma',
      planMode1: 'Modo de plano 1',
      planMode2: 'Modo de plano 2',
      planMode3: 'Modo de plano 3',
      planMode4: 'Modo de plano 4',
      deleteRecord: 'Excluir registro',
      saveRecord: 'Salvar registro',
      addRecord: 'Adicionar registro',
      sendEmail: 'Enviar e-mail',
      editSettings: 'Editar configurações',
      cancelAddingRecord: 'Cancelar a adição de novo registro',
      discardChanges: 'Descartar alterações',
      notesAndHistory: 'Notas e História',
      supportTickets: 'Tickets de suporte',
      accounts: 'Contas',
      contactProfile: 'Perfil de Contato',
      documentsAndFiles: 'Documentos e arquivos',
    },
    menu: {
      menu1: 'Menu 1',
      menu2: 'Menu 2',
      menu3: 'Menu 3',
      menu4: 'Menu 4',
    },
    window: {
      close: 'Fechar',
      minimise: 'Minimizar',
      maximise: 'Maximizar',
      centre: 'Centro',
      restore: 'Restaurar',
      loading: 'Carregamento',
      dockTop: 'Doca superior',
      dockRight: 'Doca Direita',
      dockBottom: 'Fundo da doca',
      dockLeft: 'Doca à esquerda',
      dockTopLeft: 'Doca superior esquerda',
      dockTopRight: 'Doca superior direita',
      dockBottomLeft: 'Doca inferior esquerda',
      dockBottomRight: 'Doca inferior direita',
      unDockWindow: 'Desencaixe da janela',
      moveWindow: 'Mover janela',
      top: 'Início',
      width: 'Largura',
      left: 'Esquerda',
      height: 'Altura',
      resetWindowPosition: 'Redefinir posição da janela',
      login: 'Login',
      newWindow: 'Nova janela',
      profile: 'Perfil',
      setDockPosition: 'Definir posição do encaixe',
      unsaved: 'Não salvo',
      placeInPanel: 'Colocar no painel',
      removeFromPanel: 'Remover do painel',
      about: 'Sobre',
      demo: 'Demo',
      demo1: 'Demonstração Um',
      demo2: 'Demonstração Dois',
      demo3: 'Demonstração Três',
      demo4: 'Demonstração Quatro',
      contactManager: 'Gerente de Contatos',
      addHistory: 'Adicionar histórico',
      addSupportTicket: 'Adicionar tíquete de suporte',
      editSettings: 'Editar configurações',
      search: 'Procurar',
      editCategoryItem: 'Editar item de categoria',
      editGroupItem: 'Editar item de grupo',
      editStatusItem: 'Editar item de status',
      editTypeItem: 'Editar item de tipo',
      addCategoryItem: 'Adicionar item de categoria',
      addGroupItem: 'Adicionar item de grupo',
      addStatusItem: 'Adicionar item de status',
      addTypeItem: 'Adicionar Item de Tipo',
      notesHistory: 'Notas e História',
      supportTickets: 'Tickets de suporte',
      planner: 'Planejador',
    },
    panel: {
      close: 'Fechar',
      dockTop: 'Doca superior',
      dockRight: 'Doca Direita',
      dockBottom: 'Fundo da doca',
      dockLeft: 'Doca à esquerda',
      dockTopLeft: 'Doca superior esquerda',
      dockTopRight: 'Doca superior direita',
      dockBottomLeft: 'Doca inferior esquerda',
      dockBottomRight: 'Doca inferior direita',
      unDockPanel: 'Painel de desencaixe',
      moveWindow: 'Mover janela',
      top: 'Início',
      width: 'Largura',
      left: 'Esquerda',
      height: 'Altura',
      setDockPosition: 'Definir posição do encaixe',
      system: 'Sistema',
    },
    toast: {
      close: 'Fechar',
      dismiss: 'Demitir',
      success: 'Êxito',
      warning: 'Aviso',
      information: 'Informação',
      error: 'Erro',
      loginSuccessful: 'Login bem-sucedido',
      logoutSuccessful: 'Logout bem-sucedido',
      loginFailed: 'Falha no login',
    },
    dialog: {
      ok: 'OKEY',
      cancel: 'Cancelar',
      close: 'Fechar',
      yes: 'Sim',
      no: 'Não',
      agree: 'Concordar',
      disagree: 'Discordar',
      decline: 'Declinar',
      closeWindow: 'Fechar janela',
      youHaveUnsavedContentAreYouSureYouWantToCloseThisWindow: 'Você tem conteúdo não salvo. <br><br>Tem certeza de que deseja fechar esta janela?',
      newPanel: 'Novo Painel',
      pleaseSpecifyYourPanelName: 'Especifique o nome do painel',
      panelName: 'Nome do painel',
      left: 'Esquerda',
      width: 'Largura',
      createPanel: 'Criar painel',
      closePanel: 'Fechar painel',
      doYouWantToCloseTheWindows: 'Deseja fechar as janelas?',
      keepWindows: 'Manter o Windows',
      closeWindows: 'Fechar o Windows',
      discardChanges: 'Descartar alterações',
      areYouSureYouWishToDiscardYourChanges: 'Tem certeza de que deseja descartar suas alterações?',
      discard: 'Descartar',
      deleteRecord: 'Excluir registro',
      areYouSureYouWishToDeleteThisRecord: 'Tem certeza de que deseja excluir este registro?',
      delete: 'Excluir',
    },
    tabBar: {
      autoHide: 'Ocultar automaticamente',
    },
    newWindow: 'Nova janela',
    loading: 'Carregamento...',
  },
  components: {
    languageSelector: {
      language: 'langPt',
      languages: {
        langEn: 'English', // safe
        langFr: 'Français', // safe
        langDe: 'Deutsch', // safe
        langNo: 'Norsk', // safe
        langRu: 'Russkiy', // safe
        langNl: 'Nederlands', // safe
        langEs: 'Español', // safe
        langIt: 'Italiano', // safe
        langDa: 'Dansk', // safe
        langSv: 'Svenska', // safe
        langPt: 'Português', // safe
        langFi: 'Suomi', // safe
        langZh: '中文', // safe
        langPl: 'Polskie' // safe
      },
      flags: {
        langEn: 'united-kingdom.png', // safe
        langFr: 'france.png', // safe
        langDe: 'germany.png', // safe
        langNo: 'norway.png', // safe
        langRu: 'russia.png', // safe
        langNl: 'netherlands.png', // safe
        langEs: 'spain.png', // safe
        langIt: 'italy.png', // safe
        langDa: 'denmark.png', // safe
        langSv: 'sweden.png', // safe
        langPt: 'portugal.png', // safe
        langFi: 'finland.png', // safe
        langZh: 'china.png', // safe
        langPl: 'republic-of-poland.png' // safe
      }
    },
    settings: {
      settings: 'Configurações',
      ribbonSize: 'Tamanho da faixa de opções',
      tabBarAutoHide: 'Ocultar automaticamente a barra de tabulações',
      small: 'Pequeno',
      large: 'Grande',
    },
    videoPlayer: {
      play: 'Brincar',
      pause: 'Pausa',
      volume: 'Volume',
      fullScreen: 'Mudar para ecrã inteiro',
      exitFullScreen: 'Sair em tela cheia',
      skipBack: 'Pular para trás',
      skipForward: 'Avançar',
      mute: 'Mudo',
      unMute: 'Ativar o mudo',
      pictureInPicture: 'Mostrar imagem em imagem',
      errorLoadingVideo: 'Erro ao carregar vídeo',
      restart: 'Reiniciar vídeo',
      settings: 'Configurações',
    }
  },
  system: {
    example: {
      test: 'Testando OK',
    },
    engine: {},
    userLogin: {
      username: 'Nome de usuário',
      password: 'Senha',
      login: 'Login',
      pleaseWaitLoggingIn: 'Aguarde...',
    },
    userMenu: {
      profile: 'Perfil',
      logout: 'Logout',
    },
    splash: {
      close: 'Fechar',
      autoCloseIn: 'Fechar automaticamente em',
    },
    about: {
      close: 'Fechar',
    }
  },
  contactManager: {
    noRecordsFound: 'Nenhum registro encontrado',
    recordChanged: 'Registro alterado ***',
    addingNewRecord: 'Novo Recorde ***',
    ofCount: 'de [CONTAGEM]',
    editSettings: 'Editar configurações',
    pleaseSelect: 'Por favor, selecione',
    advancedSearch: 'Pesquisa Avançada',
    switchView: 'Alternar Modo de Exibição',
    name: 'Nome',
    forename: 'Forname',
    surname: 'Sobrenome',
    address: 'Endereço',
    town: 'Vila/Cidade',
    county: 'Condado',
    postcode: 'Código Postal',
    lookup: 'Pesquisa',
    country: 'País',
    jobTitle: 'Cargo',
    department: 'Departamento',
    work: 'Trabalho',
    fax: 'Fax',
    mobile: 'Telemóvel',
    email: 'Email',
    group: 'Grupo',
    category: 'Categoria',
    updateRecord: 'Atualizar registro',
    newRecord: 'Novo Recorde',
    deleteRecord: 'Excluir registro',
    created: 'Criado',
    updated: 'Atualizado',
    lastUpdatedBy: 'Última atualização por',
    lastLogin: 'Último Login',
    start: 'Primeiro Registro',
    previous50: 'Voltar 50 Registros',
    previous: 'Recorde Anterior',
    next: 'Próximo Recorde',
    next50: 'Encaminhar 50 registros',
    end: 'Último Registro',
    categories: 'Categorias',
    accountNumber: 'N.o da Conta',
    company: 'Companhia',
    type: 'Tipo',
    status: 'Estado',
    website: 'Sítio Web',
    contactAssociations: 'Associações de Contato',
    general: 'Geral',
    authentication: 'Autenticação',
    otherInfo: 'Outras informações',
    companySettings: 'Configurações da empresa',
    access: 'Acesso',
    username: 'Nome de usuário',
    password: 'Senha',
    allowLogin: 'Permitir Login',
    notesAndHistory: 'Notas e História',
    supportTickets: 'Tickets de suporte',
    accounts: 'Contas',
    contactProfile: 'Perfil de Contato',
    documentsAndFiles: 'Documentos e arquivos',
    searching: 'Procurando...',
    selectAddress: 'Selecione Endereço',
    addressNotListed: 'Endereço não listado',
    pleaseWaitLoading: 'Aguarde. Carregamento...',
    readOnly: 'Somente leitura ***',
    public: 'Público',
    private: 'Privado',
    addedBy: 'Adicionado por',
    updatedBy: 'Atualizado por',
    Administrator: 'Administrador',
    Moderator: 'Apresentador',
    Manager: 'Gerenciado',
    Supervisor: 'Supervisor',
    User: 'Utilizador',
    None: 'Nenhum',
    Opportunity: 'Oportunidade',
    Prospect: 'Perspectiva',
    'Not Contacted': 'Não contatado',
    'Appointment Booked': 'Compromisso Reservado',
    '2nd Appointment Booked': '2º Compromisso Marcado',
    'Awaiting Decision': 'Aguardando decisão',
    Customer: 'Cliente',
    Staff: 'Pessoal',
    Contacts: 'Contatos',
    Suppliers: 'Fornecedores',
    Live: 'Viver',
    Lead: 'Morto',
    contactRecords: 'Registros de contato',
    companyRecords: 'Registros da empresa',
    yourRecordHasBeenSaved: 'Seu registro foi salvo',
    pleaseEnterALongerSurname: 'Introduza um apelido mais longo',
    pleaseEnterALongerCompanyName: 'Introduza um nome de empresa mais longo',
    pleaseSpecifyUserAuthDetails: 'Especifique os detalhes de autenticação do usuário',
    yourRecordHasBeenDeleted: 'Seu registro foi excluído',
    notesAndHistoryTab: {
      addNotesOrHistory: 'Adicionar Notas ou Histórico',
      addSupportTicket: 'Adicionar tíquete de suporte',
      type: 'Tipo',
      date: 'Data',
      time: 'Hora',
      contact: 'Contato',
      agent: 'Agente',
      popOut: 'Aparecer em uma nova janela',
      noteComponent: {
        notes: 'Anotações',
        supportCall: 'Chamada de Suporte',
        openNote: 'Abrir Nota',
        openSupportTicket: 'Abrir Ticket de Suporte',
      }
    },
    accountsTab: {
      ok: 'OKEY',
    },
    contactProfileTab: {
      ok: 'OKEY',
    },
    documentsAndFilesTab: {
      ok: 'OKEY',
    },
    settings: {
      categories: 'Categorias',
      types: 'Tipos',
      groups: 'Grupos',
      status: 'Estado',
      addNewCategory: 'Adicionar nova categoria',
      addNewContactCategory: 'Adicionar nova categoria de contato',
      addNewCompanyCategory: 'Adicionar nova categoria de empresa',
      contactCategories: 'Categorias de Contato',
      companyCategories: 'Categorias da Empresa',
      addNewStatus: 'Adicionar novo status',
      addNewGroup: 'Adicionar novo grupo',
      addNewType: 'Adicionar novo tipo',
      setDefault: 'Definir padrão',
      item: {
        cancel: 'Cancelar',
        save: 'Salvar',
        CategoryName: 'Nome da categoria',
        GroupName: 'Nome do Grupo',
        StatusName: 'Nome de status',
        TypeName: 'Nome do tipo',
        backgroundGradientTopColour: 'Gradiente de fundo Cor superior',
        backgroundGradientBottomColour: 'Gradiente de fundo Cor inferior',
        textColour: 'Cor do texto',
        fieldTooShort: 'seu [CAMPO] é muito curto, Especifique algo maior que os caracteres [COMPRIMENTO]',
      }
    },
  },
  countries: {
    AF: 'Afghanistan', // safe
    AL: 'Albania', // safe
    DZ: 'Algeria', // safe
    AS: 'American Samoa', // safe
    AD: 'Andorra', // safe
    AO: 'Angola', // safe
    AI: 'Anguilla', // safe
    AQ: 'Antarctica', // safe
    AG: 'Antigua and Barbuda', // safe
    AR: 'Argentina', // safe
    AM: 'Armenia', // safe
    AW: 'Aruba', // safe
    AU: 'Australia', // safe
    AT: 'Austria', // safe
    AZ: 'Azerbaijan', // safe
    BS: 'Bahamas', // safe
    BH: 'Bahrain', // safe
    BD: 'Bangladesh', // safe
    BB: 'Barbados', // safe
    BY: 'Belarus', // safe
    BE: 'Belgium', // safe
    BZ: 'Belize', // safe
    BJ: 'Benin', // safe
    BM: 'Bermuda', // safe
    BT: 'Bhutan', // safe
    BO: 'Bolivia (Plurinational State of)', // safe
    BQ: 'Bonaire, Sint Eustatius and Saba', // safe
    BA: 'Bosnia and Herzegovina', // safe
    BW: 'Botswana', // safe
    BV: 'Bouvet Island', // safe
    BR: 'Brazil', // safe
    IO: 'British Indian Ocean Territory', // safe
    BN: 'Brunei Darussalam', // safe
    BG: 'Bulgaria', // safe
    BF: 'Burkina Faso', // safe
    BI: 'Burundi', // safe
    CV: 'Cabo Verde', // safe
    KH: 'Cambodia', // safe
    CM: 'Cameroon', // safe
    CA: 'Canada', // safe
    KY: 'Cayman Islands', // safe
    CF: 'Central African Republic', // safe
    TD: 'Chad', // safe
    CL: 'Chile', // safe
    CN: 'China', // safe
    CX: 'Christmas Island', // safe
    CC: 'Cocos (Keeling) Islands', // safe
    CO: 'Colombia', // safe
    KM: 'Comoros', // safe
    CD: 'Congo (the Democratic Republic of the)', // safe
    CG: 'Congo', // safe
    CK: 'Cook Islands', // safe
    CR: 'Costa Rica', // safe
    HR: 'Croatia', // safe
    CU: 'Cuba', // safe
    CW: 'Curaçao', // safe
    CY: 'Cyprus', // safe
    CZ: 'Czechia', // safe
    CI: 'Côte d\'Ivoire', // safe
    DK: 'Denmark', // safe
    DJ: 'Djibouti', // safe
    DM: 'Dominica', // safe
    DO: 'Dominican Republic', // safe
    EC: 'Ecuador', // safe
    EG: 'Egypt', // safe
    SV: 'El Salvador', // safe
    GQ: 'Equatorial Guinea', // safe
    ER: 'Eritrea', // safe
    EE: 'Estonia', // safe
    SZ: 'Eswatini', // safe
    ET: 'Ethiopia', // safe
    FK: 'Falkland Islands [Malvinas]', // safe
    FO: 'Faroe Islands', // safe
    FJ: 'Fiji', // safe
    FI: 'Finland', // safe
    FR: 'France', // safe
    GF: 'French Guiana', // safe
    PF: 'French Polynesia', // safe
    TF: 'French Southern Territories', // safe
    GA: 'Gabon', // safe
    GM: 'Gambia', // safe
    GE: 'Georgia', // safe
    DE: 'Germany', // safe
    GH: 'Ghana', // safe
    GI: 'Gibraltar', // safe
    GR: 'Greece', // safe
    GL: 'Greenland', // safe
    GD: 'Grenada', // safe
    GP: 'Guadeloupe', // safe
    GU: 'Guam', // safe
    GT: 'Guatemala', // safe
    GG: 'Guernsey', // safe
    GN: 'Guinea', // safe
    GW: 'Guinea-Bissau', // safe
    GY: 'Guyana', // safe
    HT: 'Haiti', // safe
    HM: 'Heard Island and McDonald Islands', // safe
    VA: 'Holy See', // safe
    HN: 'Honduras', // safe
    HK: 'Hong Kong', // safe
    HU: 'Hungary', // safe
    IS: 'Iceland', // safe
    IN: 'India', // safe
    ID: 'Indonesia', // safe
    IR: 'Iran (Islamic Republic of)', // safe
    IQ: 'Iraq', // safe
    IE: 'Ireland', // safe
    IM: 'Isle of Man', // safe
    IL: 'Israel', // safe
    IT: 'Italy', // safe
    JM: 'Jamaica', // safe
    JP: 'Japan', // safe
    JE: 'Jersey', // safe
    JO: 'Jordan', // safe
    KZ: 'Kazakhstan', // safe
    KE: 'Kenya', // safe
    KI: 'Kiribati', // safe
    KP: 'Korea (the Democratic People\'s Republic of)', // safe
    KR: 'Korea (the Republic of)', // safe
    KW: 'Kuwait', // safe
    KG: 'Kyrgyzstan', // safe
    LA: 'Lao People\'s Democratic Republic', // safe
    LV: 'Latvia', // safe
    LB: 'Lebanon', // safe
    LS: 'Lesotho', // safe
    LR: 'Liberia', // safe
    LY: 'Libya', // safe
    LI: 'Liechtenstein', // safe
    LT: 'Lithuania', // safe
    LU: 'Luxembourg', // safe
    MO: 'Macao', // safe
    MG: 'Madagascar', // safe
    MW: 'Malawi', // safe
    MY: 'Malaysia', // safe
    MV: 'Maldives', // safe
    ML: 'Mali', // safe
    MT: 'Malta', // safe
    MH: 'Marshall Islands', // safe
    MQ: 'Martinique', // safe
    MR: 'Mauritania', // safe
    MU: 'Mauritius', // safe
    YT: 'Mayotte', // safe
    MX: 'Mexico', // safe
    FM: 'Micronesia (Federated States of)', // safe
    MD: 'Moldova (the Republic of)', // safe
    MC: 'Monaco', // safe
    MN: 'Mongolia', // safe
    ME: 'Montenegro', // safe
    MS: 'Montserrat', // safe
    MA: 'Morocco', // safe
    MZ: 'Mozambique', // safe
    MM: 'Myanmar', // safe
    NA: 'Namibia', // safe
    NR: 'Nauru', // safe
    NP: 'Nepal', // safe
    NL: 'Netherlands', // safe
    NC: 'New Caledonia', // safe
    NZ: 'New Zealand', // safe
    NI: 'Nicaragua', // safe
    NE: 'Niger', // safe
    NG: 'Nigeria', // safe
    NU: 'Niue', // safe
    NF: 'Norfolk Island', // safe
    MK: 'North Macedonia', // safe
    MP: 'Northern Mariana Islands', // safe
    NO: 'Norway', // safe
    OM: 'Oman', // safe
    PK: 'Pakistan', // safe
    PW: 'Palau', // safe
    PS: 'Palestine, State of', // safe
    PA: 'Panama', // safe
    PG: 'Papua New Guinea', // safe
    PY: 'Paraguay', // safe
    PE: 'Peru', // safe
    PH: 'Philippines', // safe
    PN: 'Pitcairn', // safe
    PL: 'Poland', // safe
    PT: 'Portugal', // safe
    PR: 'Puerto Rico', // safe
    QA: 'Qatar', // safe
    RO: 'Romania', // safe
    RU: 'Russian Federation', // safe
    RW: 'Rwanda', // safe
    RE: 'Réunion', // safe
    BL: 'Saint Barthélemy', // safe
    SH: 'Saint Helena, Ascension and Tristan da Cunha', // safe
    KN: 'Saint Kitts and Nevis', // safe
    LC: 'Saint Lucia', // safe
    MF: 'Saint Martin (French part)', // safe
    PM: 'Saint Pierre and Miquelon', // safe
    VC: 'Saint Vincent and the Grenadines', // safe
    WS: 'Samoa', // safe
    SM: 'San Marino', // safe
    ST: 'Sao Tome and Principe', // safe
    SA: 'Saudi Arabia', // safe
    SN: 'Senegal', // safe
    RS: 'Serbia', // safe
    SC: 'Seychelles', // safe
    SL: 'Sierra Leone', // safe
    SG: 'Singapore', // safe
    SX: 'Sint Maarten (Dutch part)', // safe
    SK: 'Slovakia', // safe
    SI: 'Slovenia', // safe
    SB: 'Solomon Islands', // safe
    SO: 'Somalia', // safe
    ZA: 'South Africa', // safe
    GS: 'South Georgia and the South Sandwich Islands', // safe
    SS: 'South Sudan', // safe
    ES: 'Spain', // safe
    LK: 'Sri Lanka', // safe
    SD: 'Sudan', // safe
    SR: 'Suriname', // safe
    SJ: 'Svalbard and Jan Mayen', // safe
    SE: 'Sweden', // safe
    CH: 'Switzerland', // safe
    SY: 'Syrian Arab Republic', // safe
    TW: 'Taiwan (Province of China)', // safe
    TJ: 'Tajikistan', // safe
    TZ: 'Tanzania, the United Republic of', // safe
    TH: 'Thailand', // safe
    TL: 'Timor-Leste', // safe
    TG: 'Togo', // safe
    TK: 'Tokelau', // safe
    TO: 'Tonga', // safe
    TT: 'Trinidad and Tobago', // safe
    TN: 'Tunisia', // safe
    TR: 'Turkey', // safe
    TM: 'Turkmenistan', // safe
    TC: 'Turks and Caicos Islands', // safe
    TV: 'Tuvalu', // safe
    UG: 'Uganda', // safe
    UA: 'Ukraine', // safe
    AE: 'United Arab Emirates', // safe
    GB: 'United Kingdom', // safe
    UM: 'United States Minor Outlying Islands', // safe
    US: 'United States of America', // safe
    UY: 'Uruguay', // safe
    UZ: 'Uzbekistan', // safe
    VU: 'Vanuatu', // safe
    VE: 'Venezuela (Bolivarian Republic of)', // safe
    VN: 'Viet Nam', // safe
    VG: 'Virgin Islands (British)', // safe
    VI: 'Virgin Islands (U.S.)', // safe
    WF: 'Wallis and Futuna', // safe
    EH: 'Western Sahara*', // safe
    YE: 'Yemen', // safe
    ZM: 'Zambia', // safe
    ZW: 'Zimbabwe', // safe
    AX: 'Åland Islands' // safe
  },
  honorifics: {
    mr: 'Sr',
    ms: 'Ms',
    miss: 'Errar',
    mrs: 'Sra',
    mx: 'Mx',
    master: 'Senhor',
    dir: 'Senhor',
    madam: 'Senhora',
    dame: 'Dama',
    lord: 'Senhor',
    lady: 'Senhora',
    viscount: 'Visconde',
    dr: 'Dr',
    prof: 'Prof',
    br: 'Br',
    sr: 'Irmã',
    fr: 'Sex',
    rev: 'Rev',
    pr: 'Pr',
    elder: 'Ancião',
  }
};
