export type Language = "en" | "es" | "fr" | "de"

export const languages = {
  en: "English",
  es: "Español",
  fr: "Fran��ais",
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

    // Landing Page Additional
    "landing.badge": "AI-Powered Fitness Revolution",
    "landing.title.main": "HealthMaxxing",
    "landing.title.sub": "Redefined",
    "landing.description": "Transform your fitness journey with AI-powered routines, real-time analytics, and personalized coaching that evolves with your goals. The future of fitness is here.",
    "landing.cta.primary": "Start Your Journey",
    "landing.cta.secondary": "Watch Demo",
    "landing.stats.users": "Active Users",
    "landing.stats.workouts": "Workouts Generated",
    "landing.stats.success": "Success Rate",
    "landing.stats.trusted": "Trusted Worldwide",
    "landing.stats.support": "AI Support",

    // Pricing
    "pricing.title": "Choose Your Plan",
    "pricing.subtitle": "Start your fitness journey with our flexible pricing options",
    "pricing.free.title": "Free",
    "pricing.free.price": "$0",
    "pricing.free.period": "/month",
    "pricing.pro.title": "Pro",
    "pricing.pro.price": "$19",
    "pricing.pro.period": "/month",
    "pricing.enterprise.title": "Enterprise",
    "pricing.enterprise.price": "Custom",
    "pricing.enterprise.period": "",
    "pricing.cta": "Get Started",

    // Profile Form
    "profile.title": "Complete Your Profile",
    "profile.subtitle": "Tell us about yourself to get personalized recommendations",
    "profile.age": "Age",
    "profile.weight": "Weight (kg)",
    "profile.height": "Height (cm)",
    "profile.gender": "Gender",
    "profile.gender.male": "Male",
    "profile.gender.female": "Female",
    "profile.gender.other": "Other",
    "profile.submit": "Complete Profile",

    // Analytics
    "analytics.title": "📊 Health Analytics",
    "analytics.subtitle": "Track your progress with detailed insights",

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
    "nav.logout": "Cerrar Sesión",

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

    // Landing Page Additional
    "landing.badge": "Revolución Fitness Potenciada por IA",
    "landing.title.main": "HealthMaxxing",
    "landing.title.sub": "Redefinido",
    "landing.description": "Transforma tu viaje fitness con rutinas potenciadas por IA, análisis en tiempo real y entrenamiento personalizado que evoluciona con tus objetivos. El futuro del fitness está aquí.",
    "landing.cta.primary": "Comienza Tu Viaje",
    "landing.cta.secondary": "Ver Demo",
    "landing.stats.users": "Usuarios Activos",
    "landing.stats.workouts": "Entrenamientos Generados",
    "landing.stats.success": "Tasa de Éxito",
    "landing.stats.trusted": "Confiado Mundialmente",
    "landing.stats.support": "Soporte IA",

    // Pricing
    "pricing.title": "Elige Tu Plan",
    "pricing.subtitle": "Comienza tu viaje fitness con nuestras opciones de precios flexibles",
    "pricing.free.title": "Gratis",
    "pricing.free.price": "$0",
    "pricing.free.period": "/mes",
    "pricing.pro.title": "Pro",
    "pricing.pro.price": "$19",
    "pricing.pro.period": "/mes",
    "pricing.enterprise.title": "Empresarial",
    "pricing.enterprise.price": "Personalizado",
    "pricing.enterprise.period": "",
    "pricing.cta": "Comenzar",

    // Profile Form
    "profile.title": "Completa Tu Perfil",
    "profile.subtitle": "Cuéntanos sobre ti para obtener recomendaciones personalizadas",
    "profile.age": "Edad",
    "profile.weight": "Peso (kg)",
    "profile.height": "Altura (cm)",
    "profile.gender": "Género",
    "profile.gender.male": "Masculino",
    "profile.gender.female": "Femenino",
    "profile.gender.other": "Otro",
    "profile.submit": "Completar Perfil",

    // Analytics
    "analytics.title": "📊 Análisis de Salud",
    "analytics.subtitle": "Rastrea tu progreso con insights detallados",

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

    // Landing Page Additional
    "landing.badge": "Révolution Fitness Alimentée par l'IA",
    "landing.title.main": "HealthMaxxing",
    "landing.title.sub": "Redéfini",
    "landing.description": "Transformez votre parcours fitness avec des routines alimentées par l'IA, des analyses en temps réel et un coaching personnalisé qui évolue avec vos objectifs. L'avenir du fitness est ici.",
    "landing.cta.primary": "Commencez Votre Voyage",
    "landing.cta.secondary": "Voir la Démo",
    "landing.stats.users": "Utilisateurs Actifs",
    "landing.stats.workouts": "Entraînements Générés",
    "landing.stats.success": "Taux de Réussite",
    "landing.stats.trusted": "Reconnu Mondialement",
    "landing.stats.support": "Support IA",

    // Pricing
    "pricing.title": "Choisissez Votre Plan",
    "pricing.subtitle": "Commencez votre parcours fitness avec nos options de tarification flexibles",
    "pricing.free.title": "Gratuit",
    "pricing.free.price": "0€",
    "pricing.free.period": "/mois",
    "pricing.pro.title": "Pro",
    "pricing.pro.price": "19€",
    "pricing.pro.period": "/mois",
    "pricing.enterprise.title": "Entreprise",
    "pricing.enterprise.price": "Personnalisé",
    "pricing.enterprise.period": "",
    "pricing.cta": "Commencer",

    // Profile Form
    "profile.title": "Complétez Votre Profil",
    "profile.subtitle": "Parlez-nous de vous pour obtenir des recommandations personnalisées",
    "profile.age": "Âge",
    "profile.weight": "Poids (kg)",
    "profile.height": "Taille (cm)",
    "profile.gender": "Genre",
    "profile.gender.male": "Masculin",
    "profile.gender.female": "Féminin",
    "profile.gender.other": "Autre",
    "profile.submit": "Compléter le Profil",

    // Analytics
    "analytics.title": "📊 Analyses de Santé",
    "analytics.subtitle": "Suivez vos progrès avec des insights détaillés",

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

    // Landing Page Additional
    "landing.badge": "KI-gesteuerte Fitness Revolution",
    "landing.title.main": "HealthMaxxing",
    "landing.title.sub": "Neu Definiert",
    "landing.description": "Transformieren Sie Ihre Fitness-Reise mit KI-gesteuerten Routinen, Echtzeit-Analysen und personalisiertem Coaching, das sich mit Ihren Zielen entwickelt. Die Zukunft des Fitness ist hier.",
    "landing.cta.primary": "Starten Sie Ihre Reise",
    "landing.cta.secondary": "Demo Ansehen",
    "landing.stats.users": "Aktive Benutzer",
    "landing.stats.workouts": "Generierte Workouts",
    "landing.stats.success": "Erfolgsrate",
    "landing.stats.trusted": "Weltweit Vertraut",
    "landing.stats.support": "KI-Support",

    // Pricing
    "pricing.title": "Wählen Sie Ihren Plan",
    "pricing.subtitle": "Beginnen Sie Ihre Fitness-Reise mit unseren flexiblen Preisoptionen",
    "pricing.free.title": "Kostenlos",
    "pricing.free.price": "0€",
    "pricing.free.period": "/Monat",
    "pricing.pro.title": "Pro",
    "pricing.pro.price": "19€",
    "pricing.pro.period": "/Monat",
    "pricing.enterprise.title": "Unternehmen",
    "pricing.enterprise.price": "Individuell",
    "pricing.enterprise.period": "",
    "pricing.cta": "Loslegen",

    // Profile Form
    "profile.title": "Vervollständigen Sie Ihr Profil",
    "profile.subtitle": "Erzählen Sie uns von sich, um personalisierte Empfehlungen zu erhalten",
    "profile.age": "Alter",
    "profile.weight": "Gewicht (kg)",
    "profile.height": "Größe (cm)",
    "profile.gender": "Geschlecht",
    "profile.gender.male": "Männlich",
    "profile.gender.female": "Weiblich",
    "profile.gender.other": "Andere",
    "profile.submit": "Profil Vervollständigen",

    // Analytics
    "analytics.title": "📊 Gesundheits-Analysen",
    "analytics.subtitle": "Verfolgen Sie Ihren Fortschritt mit detaillierten Insights",

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
