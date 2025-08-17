export type Language = "en" | "es" | "fr" | "de"

export const languages = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
}

export const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.dashboard": "Dashboard",
    "nav.chat": "AI Chat",
    "nav.analytics": "Analytics",
    "nav.calculators": "Calculators",
    "nav.profile": "Profile",
    "nav.settings": "Settings",
    "nav.login": "Login",
    "nav.register": "Register",
    "nav.logout": "Logout",

    // Landing Page
    "hero.title": "Transform Your Health with AI-Powered Fitness",
    "hero.subtitle":
      "Get personalized workout routines, nutrition plans, and health insights powered by advanced artificial intelligence.",
    "hero.cta": "Start Your Journey",
    "hero.secondary": "Learn More",

    // Features
    "features.title": "Powerful Features for Your Fitness Journey",
    "features.ai.title": "AI-Powered Coaching",
    "features.ai.description": "Get personalized workout routines and nutrition advice from our advanced AI coach.",
    "features.analytics.title": "Advanced Analytics",
    "features.analytics.description": "Track your progress with detailed analytics and insights.",
    "features.community.title": "Community Support",
    "features.community.description": "Connect with like-minded individuals on their fitness journey.",

    // Chat
    "chat.placeholder": "Ask me anything about fitness, nutrition, or workouts...",
    "chat.thinking": "HealthMaxx AI is thinking...",
    "chat.welcome": "Hello! I'm HealthMaxx AI, your personal fitness and health coach powered by advanced AI.",
    "chat.suggestions.routine": "Create a workout routine",
    "chat.suggestions.diet": "Plan my nutrition",
    "chat.suggestions.goals": "Set fitness goals",
    "chat.suggestions.progress": "Track my progress",

    // Dashboard
    "dashboard.title": "Your Health Dashboard",
    "dashboard.welcome": "Welcome back",
    "dashboard.stats.workouts": "Workouts This Week",
    "dashboard.stats.calories": "Calories Burned",
    "dashboard.stats.goals": "Goals Achieved",
    "dashboard.stats.streak": "Day Streak",

    // Settings
    "settings.title": "Settings",
    "settings.profile": "Profile Settings",
    "settings.ai": "AI Preferences",
    "settings.notifications": "Notifications",
    "settings.language": "Language",
    "settings.theme": "Theme",
    "settings.theme.light": "Light",
    "settings.theme.dark": "Dark",
    "settings.save": "Save Changes",

    // Auth
    "auth.login.title": "Welcome Back",
    "auth.login.subtitle": "Sign in to your HealthMaxx account",
    "auth.register.title": "Create Account",
    "auth.register.subtitle": "Join HealthMaxx and start your fitness journey",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.name": "Full Name",
    "auth.login.button": "Sign In",
    "auth.register.button": "Create Account",

    // Profile Setup
    "profile.setup.title": "Complete Your Profile",
    "profile.setup.subtitle": "Help us personalize your fitness journey with some basic information.",
    "profile.setup.complete": "Complete Setup",
    "profile.age": "Age",
    "profile.age.placeholder": "Enter your age",
    "profile.weight": "Weight (kg)",
    "profile.weight.placeholder": "Enter your weight",
    "profile.height": "Height (cm)",
    "profile.height.placeholder": "Enter your height",
    "profile.sex": "Sex",
    "profile.sex.placeholder": "Select your sex",
    "profile.sex.male": "Male",
    "profile.sex.female": "Female",
    "profile.sex.other": "Other",

    // Common
    "common.loading": "Loading...",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.delete": "Delete",
    "common.edit": "Edit",
    "common.back": "Back",
    "common.next": "Next",
    "common.previous": "Previous",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.dashboard": "Panel",
    "nav.chat": "Chat IA",
    "nav.analytics": "Análisis",
    "nav.calculators": "Calculadoras",
    "nav.profile": "Perfil",
    "nav.settings": "Configuración",
    "nav.login": "Iniciar Sesión",
    "nav.register": "Registrarse",
    "nav.logout": "Cerrar Sesi��n",

    // Landing Page
    "hero.title": "Transforma Tu Salud con Fitness Potenciado por IA",
    "hero.subtitle":
      "Obtén rutinas de ejercicio personalizadas, planes de nutrición e insights de salud potenciados por inteligencia artificial avanzada.",
    "hero.cta": "Comienza Tu Viaje",
    "hero.secondary": "Saber Más",

    // Features
    "features.title": "Características Poderosas para Tu Viaje Fitness",
    "features.ai.title": "Entrenamiento con IA",
    "features.ai.description":
      "Obtén rutinas de ejercicio personalizadas y consejos nutricionales de nuestro entrenador IA avanzado.",
    "features.analytics.title": "Análisis Avanzados",
    "features.analytics.description": "Rastrea tu progreso con análisis detallados e insights.",
    "features.community.title": "Apoyo Comunitario",
    "features.community.description": "Conéctate con personas afines en su viaje fitness.",

    // Chat
    "chat.placeholder": "Pregúntame cualquier cosa sobre fitness, nutrición o ejercicios...",
    "chat.thinking": "HealthMaxx IA está pensando...",
    "chat.welcome": "¡Hola! Soy HealthMaxx IA, tu entrenador personal de fitness y salud potenciado por IA avanzada.",
    "chat.suggestions.routine": "Crear una rutina de ejercicios",
    "chat.suggestions.diet": "Planificar mi nutrición",
    "chat.suggestions.goals": "Establecer objetivos fitness",
    "chat.suggestions.progress": "Rastrear mi progreso",

    // Dashboard
    "dashboard.title": "Tu Panel de Salud",
    "dashboard.welcome": "Bienvenido de vuelta",
    "dashboard.stats.workouts": "Entrenamientos Esta Semana",
    "dashboard.stats.calories": "Calorías Quemadas",
    "dashboard.stats.goals": "Objetivos Logrados",
    "dashboard.stats.streak": "Racha de Días",

    // Settings
    "settings.title": "Configuración",
    "settings.profile": "Configuración de Perfil",
    "settings.ai": "Preferencias de IA",
    "settings.notifications": "Notificaciones",
    "settings.language": "Idioma",
    "settings.theme": "Tema",
    "settings.theme.light": "Claro",
    "settings.theme.dark": "Oscuro",
    "settings.save": "Guardar Cambios",

    // Auth
    "auth.login.title": "Bienvenido de Vuelta",
    "auth.login.subtitle": "Inicia sesión en tu cuenta HealthMaxx",
    "auth.register.title": "Crear Cuenta",
    "auth.register.subtitle": "Únete a HealthMaxx y comienza tu viaje fitness",
    "auth.email": "Correo Electrónico",
    "auth.password": "Contraseña",
    "auth.name": "Nombre Completo",
    "auth.login.button": "Iniciar Sesión",
    "auth.register.button": "Crear Cuenta",

    // Profile Setup
    "profile.setup.title": "Completa Tu Perfil",
    "profile.setup.subtitle": "Ayúdanos a personalizar tu viaje fitness con información básica.",
    "profile.setup.complete": "Completar Configuración",
    "profile.age": "Edad",
    "profile.age.placeholder": "Ingresa tu edad",
    "profile.weight": "Peso (kg)",
    "profile.weight.placeholder": "Ingresa tu peso",
    "profile.height": "Altura (cm)",
    "profile.height.placeholder": "Ingresa tu altura",
    "profile.sex": "Sexo",
    "profile.sex.placeholder": "Selecciona tu sexo",
    "profile.sex.male": "Masculino",
    "profile.sex.female": "Femenino",
    "profile.sex.other": "Otro",

    // Common
    "common.loading": "Cargando...",
    "common.save": "Guardar",
    "common.cancel": "Cancelar",
    "common.delete": "Eliminar",
    "common.edit": "Editar",
    "common.back": "Atrás",
    "common.next": "Siguiente",
    "common.previous": "Anterior",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.dashboard": "Tableau de Bord",
    "nav.chat": "Chat IA",
    "nav.analytics": "Analyses",
    "nav.calculators": "Calculatrices",
    "nav.profile": "Profil",
    "nav.settings": "Paramètres",
    "nav.login": "Connexion",
    "nav.register": "S'inscrire",
    "nav.logout": "Déconnexion",

    // Landing Page
    "hero.title": "Transformez Votre Santé avec le Fitness Alimenté par l'IA",
    "hero.subtitle":
      "Obtenez des routines d'entraînement personnalisées, des plans nutritionnels et des insights santé alimentés par l'intelligence artificielle avancée.",
    "hero.cta": "Commencez Votre Voyage",
    "hero.secondary": "En Savoir Plus",

    // Features
    "features.title": "Fonctionnalités Puissantes pour Votre Parcours Fitness",
    "features.ai.title": "Coaching Alimenté par l'IA",
    "features.ai.description":
      "Obtenez des routines d'entraînement personnalisées et des conseils nutritionnels de notre coach IA avancé.",
    "features.analytics.title": "Analyses Avancées",
    "features.analytics.description": "Suivez vos progrès avec des analyses détaillées et des insights.",
    "features.community.title": "Support Communautaire",
    "features.community.description":
      "Connectez-vous avec des personnes partageant les mêmes idées dans leur parcours fitness.",

    // Chat
    "chat.placeholder": "Demandez-moi n'importe quoi sur le fitness, la nutrition ou les entraînements...",
    "chat.thinking": "HealthMaxx IA réfléchit...",
    "chat.welcome":
      "Bonjour ! Je suis HealthMaxx IA, votre coach personnel de fitness et santé alimenté par l'IA avancée.",
    "chat.suggestions.routine": "Créer une routine d'entraînement",
    "chat.suggestions.diet": "Planifier ma nutrition",
    "chat.suggestions.goals": "Définir des objectifs fitness",
    "chat.suggestions.progress": "Suivre mes progrès",

    // Dashboard
    "dashboard.title": "Votre Tableau de Bord Santé",
    "dashboard.welcome": "Bon retour",
    "dashboard.stats.workouts": "Entraînements Cette Semaine",
    "dashboard.stats.calories": "Calories Brûlées",
    "dashboard.stats.goals": "Objectifs Atteints",
    "dashboard.stats.streak": "Série de Jours",

    // Settings
    "settings.title": "Paramètres",
    "settings.profile": "Paramètres de Profil",
    "settings.ai": "Préférences IA",
    "settings.notifications": "Notifications",
    "settings.language": "Langue",
    "settings.theme": "Thème",
    "settings.theme.light": "Clair",
    "settings.theme.dark": "Sombre",
    "settings.save": "Sauvegarder les Modifications",

    // Auth
    "auth.login.title": "Bon Retour",
    "auth.login.subtitle": "Connectez-vous à votre compte HealthMaxx",
    "auth.register.title": "Créer un Compte",
    "auth.register.subtitle": "Rejoignez HealthMaxx et commencez votre parcours fitness",
    "auth.email": "Email",
    "auth.password": "Mot de Passe",
    "auth.name": "Nom Complet",
    "auth.login.button": "Se Connecter",
    "auth.register.button": "Créer un Compte",

    // Common
    "common.loading": "Chargement...",
    "common.save": "Sauvegarder",
    "common.cancel": "Annuler",
    "common.delete": "Supprimer",
    "common.edit": "Modifier",
    "common.back": "Retour",
    "common.next": "Suivant",
    "common.previous": "Précédent",
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.dashboard": "Dashboard",
    "nav.chat": "KI Chat",
    "nav.analytics": "Analysen",
    "nav.calculators": "Rechner",
    "nav.profile": "Profil",
    "nav.settings": "Einstellungen",
    "nav.login": "Anmelden",
    "nav.register": "Registrieren",
    "nav.logout": "Abmelden",

    // Landing Page
    "hero.title": "Transformieren Sie Ihre Gesundheit mit KI-gesteuertem Fitness",
    "hero.subtitle":
      "Erhalten Sie personalisierte Trainingsroutinen, Ernährungspläne und Gesundheitseinblicke, die von fortschrittlicher künstlicher Intelligenz angetrieben werden.",
    "hero.cta": "Starten Sie Ihre Reise",
    "hero.secondary": "Mehr Erfahren",

    // Features
    "features.title": "Mächtige Funktionen für Ihre Fitness-Reise",
    "features.ai.title": "KI-gesteuertes Coaching",
    "features.ai.description":
      "Erhalten Sie personalisierte Trainingsroutinen und Ernährungsberatung von unserem fortschrittlichen KI-Coach.",
    "features.analytics.title": "Erweiterte Analysen",
    "features.analytics.description": "Verfolgen Sie Ihren Fortschritt mit detaillierten Analysen und Einblicken.",
    "features.community.title": "Community-Unterstützung",
    "features.community.description": "Verbinden Sie sich mit Gleichgesinnten auf ihrer Fitness-Reise.",

    // Chat
    "chat.placeholder": "Fragen Sie mich alles über Fitness, Ernährung oder Workouts...",
    "chat.thinking": "HealthMaxx KI denkt nach...",
    "chat.welcome":
      "Hallo! Ich bin HealthMaxx KI, Ihr persönlicher Fitness- und Gesundheitscoach, angetrieben von fortschrittlicher KI.",
    "chat.suggestions.routine": "Eine Trainingsroutine erstellen",
    "chat.suggestions.diet": "Meine Ernährung planen",
    "chat.suggestions.goals": "Fitness-Ziele setzen",
    "chat.suggestions.progress": "Meinen Fortschritt verfolgen",

    // Dashboard
    "dashboard.title": "Ihr Gesundheits-Dashboard",
    "dashboard.welcome": "Willkommen zurück",
    "dashboard.stats.workouts": "Workouts Diese Woche",
    "dashboard.stats.calories": "Verbrannte Kalorien",
    "dashboard.stats.goals": "Erreichte Ziele",
    "dashboard.stats.streak": "Tage-Serie",

    // Settings
    "settings.title": "Einstellungen",
    "settings.profile": "Profil-Einstellungen",
    "settings.ai": "KI-Präferenzen",
    "settings.notifications": "Benachrichtigungen",
    "settings.language": "Sprache",
    "settings.theme": "Design",
    "settings.theme.light": "Hell",
    "settings.theme.dark": "Dunkel",
    "settings.save": "Änderungen Speichern",

    // Auth
    "auth.login.title": "Willkommen Zurück",
    "auth.login.subtitle": "Melden Sie sich bei Ihrem HealthMaxx-Konto an",
    "auth.register.title": "Konto Erstellen",
    "auth.register.subtitle": "Treten Sie HealthMaxx bei und beginnen Sie Ihre Fitness-Reise",
    "auth.email": "E-Mail",
    "auth.password": "Passwort",
    "auth.name": "Vollständiger Name",
    "auth.login.button": "Anmelden",
    "auth.register.button": "Konto Erstellen",

    // Common
    "common.loading": "Laden...",
    "common.save": "Speichern",
    "common.cancel": "Abbrechen",
    "common.delete": "Löschen",
    "common.edit": "Bearbeiten",
    "common.back": "Zurück",
    "common.next": "Weiter",
    "common.previous": "Vorherige",
  },
}

export function getTranslation(key: string, language: Language): string {
  return translations[language][key as keyof (typeof translations)[Language]] || key
}
