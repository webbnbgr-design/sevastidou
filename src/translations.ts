export type Language = 'el' | 'en';

export interface TranslationItem {
  el: string;
  en: string;
}

export const translations = {
  nav: {
    home: { el: 'Αρχική', en: 'Home' },
    team: { el: 'Η Ομάδα μας', en: 'Our Team' },
    services: { el: 'Υπηρεσίες', en: 'Services' },
    immigration: { el: 'Δίκαιο Αλλοδαπών', en: 'Immigration Law' },
    blog: { el: 'Blog/Νέα', en: 'Blog' },
    contact: { el: 'Επικοινωνία', en: 'Contact' },
  },
  hero: {
    title: { el: 'Νομική καθοδήγηση με επίκεντρο τον άνθρωπο και το αποτέλεσμα', en: 'Legal guidance centered on humans and results' },
    subtitle: { el: 'Εμπιστοσύνη, Εξειδίκευση, Αποτελεσματικότητα. Το δικό σας δίκαιο, η δική μας προτεραιότητα.', en: 'Trust, Expertise, Effectiveness. Your right, our priority.' },
    cta: { el: 'Κλείστε Ραντεβού', en: 'Book a Consultation' },
  },
  social: {
    title: { el: 'Η παρουσία μας στα Social Media', en: 'Our Social Media Presence' },
    followers: { el: '16.000+ Ακόλουθοι στο Facebook', en: '16,000+ Facebook Followers' },
    reviews: { el: '5/5 Άριστες Κριτικές', en: '5/5 Excellent Reviews' },
  },
  immigration: {
    title: { el: 'Εξειδίκευση στο Δίκαιο Αλλοδαπών', en: 'Specialization in Immigration Law' },
    desc: { 
      el: 'Το γραφείο μας διαθέτει πολυετή εμπειρία και αποδεδειγμένη αποτελεσματικότητα σε υποθέσεις αλλοδαπών. Παρέχουμε ολοκληρωμένες υπηρεσίες για Golden Visa, Άδειες Διαμονής, Πολιτογραφήσεις και Visa. Κατανοούμε τις προκλήσεις της μετανάστευσης και στεκόμαστε δίπλα σας σε κάθε βήμα της διαδικασίας.',
      en: 'Our firm has years of experience and proven effectiveness in immigration cases. We provide comprehensive services for Golden Visa, Residence Permits, Citizenship, and Visas. We understand the challenges of migration and stand by you at every step of the process.'
    },
  },
  services: {
    civil: { el: 'Αστικό Δίκαιο', en: 'Civil Law' },
    immigration: { el: 'Δίκαιο Αλλοδαπών', en: 'Immigration Law' },
    criminal: { el: 'Ποινικό Δίκαιο', en: 'Criminal Law' },
  },
  blog: {
    title: { el: 'Νέα & Άρθρα', en: 'News & Articles' },
    posts: [
      {
        title: { el: 'Golden Visa: Όλα όσα πρέπει να γνωρίζετε για το 2024', en: 'Golden Visa: Everything you need to know for 2024' },
        category: 'Immigration',
        excerpt: { 
          el: 'Οι νέες αλλαγές στο πρόγραμμα Golden Visa της Ελλάδας φέρνουν καινοτομίες και νέες προϋποθέσεις. Ανακαλύψτε πώς μπορείτε να εξασφαλίσετε την άδεια διαμονής σας μέσω επενδύσεων σε ακίνητα, λαμβάνοντας υπόψη τα νέα όρια και τις γεωγραφικές ζώνες που επηρεάζονται από τις τελευταίες νομοθετικές ρυθμίσεις.',
          en: 'The new changes in Greece\'s Golden Visa program bring innovations and new requirements. Discover how you can secure your residence permit through real estate investment, considering the new limits and geographical zones affected by the latest legislative regulations.'
        }
      },
      {
        title: { el: 'Διαδικασία Μετανάστευσης στην Ελλάδα', en: 'Immigration Process in Greece' },
        category: 'Immigration',
        excerpt: {
          el: 'Η μετανάστευση στην Ελλάδα απαιτεί προσεκτικό σχεδιασμό και γνώση της νομοθεσίας. Από τη συγκέντρωση των δικαιολογητικών έως την τελική κατάθεση, το γραφείο μας σας καθοδηγεί με ασφάλεια σε κάθε στάδιο, εξασφαλίζοντας ότι όλα τα έγγραφα είναι σύμφωνα με τις τρέχουσες απαιτήσεις των αρχών.',
          en: 'Immigration to Greece requires careful planning and knowledge of the law. From gathering documents to final submission, our firm guides you safely through every stage, ensuring that all documents comply with the current requirements of the authorities.'
        }
      },
      {
        title: { el: 'Αστικό Δίκαιο: Προστασία της Ιδιοκτησίας', en: 'Civil Law: Property Protection' },
        category: 'Civil Law',
        excerpt: {
          el: 'Η προστασία των περιουσιακών σας στοιχείων αποτελεί ακρογωνιαίο λίθο της νομικής μας πρακτικής. Εξειδικευόμαστε σε θέματα εμπράγματου δικαίου, συμβάσεων και κληρονομικών διαφορών, παρέχοντας ολοκληρωμένη υποστήριξη για τη διασφάλιση των συμφερόντων σας.',
          en: 'The protection of your assets is a cornerstone of our legal practice. We specialize in property law, contracts, and inheritance disputes, providing comprehensive support to ensure your interests are secured.'
        }
      },
      {
        title: { el: 'Δικαιώματα Αλλοδαπών στην Ευρωπαϊκή Ένωση', en: 'Rights of Foreigners in the European Union' },
        category: 'Immigration',
        excerpt: {
          el: 'Η Ευρωπαϊκή Ένωση παρέχει ένα ισχυρό πλαίσιο προστασίας για τους υπηκόους τρίτων χωρών. Ενημερωθείτε για τα δικαιώματά σας όσον αφορά την εργασία, την εκπαίδευση και την κοινωνική ασφάλιση, καθώς και για τις δυνατότητες κινητικότητας εντός του χώρου Σένγκεν.',
          en: 'The European Union provides a strong protection framework for third-country nationals. Get informed about your rights regarding work, education, and social security, as well as the possibilities for mobility within the Schengen area.'
        }
      },
      {
        title: { el: 'Ποινική Διαδικασία: Τα Πρώτα Βήματα', en: 'Criminal Procedure: The First Steps' },
        category: 'Criminal Law',
        excerpt: {
          el: 'Η εμπλοκή σε μια ποινική διαδικασία μπορεί να είναι μια αγχωτική εμπειρία. Η άμεση νομική εκπροσώπηση είναι κρίσιμη για τη διασφάλιση των δικαιωμάτων σας από την πρώτη στιγμή της ανάκρισης έως την ακροαματική διαδικασία στο δικαστήριο.',
          en: 'Being involved in criminal proceedings can be a stressful experience. Immediate legal representation is crucial to ensuring your rights from the very first moment of interrogation to the court hearing.'
        }
      },
    ],
  },
  strategicApproach: {
    title: { el: 'Στρατηγική Προσέγγιση & Νομική Υπεροχή', en: 'Strategic Approach & Legal Excellence' },
    subtitle: { el: 'Η φιλοσοφία μας βασίζεται στην απόλυτη εξειδίκευση και την προσωποποιημένη στρατηγική για κάθε υπόθεση.', en: 'Our philosophy is based on absolute specialization and a personalized strategy for every case.' },
    methods: [
      {
        title: { el: 'Ολιστική Ανάλυση Υπόθεσης', en: 'Holistic Case Analysis' },
        desc: { 
          el: 'Κάθε νομική πρόκληση απαιτεί μια βαθιά κατανόηση όχι μόνο του γράμματος του νόμου, αλλά και του ευρύτερου πλαισίου. Στο γραφείο μας, ξεκινάμε με μια εξαντλητική ανάλυση των δεδομένων σας, εντοπίζοντας κινδύνους και ευκαιρίες που συχνά διαφεύγουν από μια τυπική προσέγγιση. Η προετοιμασία μας είναι το κλειδί για την επιτυχία στα δικαστήρια και τις διοικητικές αρχές.',
          en: 'Every legal challenge requires a deep understanding not only of the letter of the law but also the broader context. In our office, we start with an exhaustive analysis of your data, identifying risks and opportunities that often escape a typical approach. Our preparation is the key to success in courts and administrative authorities.'
        }
      },
      {
        title: { el: 'Εξειδίκευση στο Δίκαιο Αλλοδαπών', en: 'Specialization in Foreigners Law' },
        desc: {
          el: 'Η διαχείριση υποθέσεων μετανάστευσης και αδειών διαμονής απαιτεί συνεχή παρακολούθηση των νομοθετικών αλλαγών σε εθνικό και ευρωπαϊκό επίπεδο. Είμαστε πρωτοπόροι στην εφαρμογή των νέων διατάξεων για την Golden Visa και τις άδειες εργασίας, προσφέροντας στους πελάτες μας τη σιγουριά ότι η υπόθεσή τους τυγχάνει της βέλτιστης δυνατής διαχείρισης.',
          en: 'Managing immigration and residence permit cases requires constant monitoring of legislative changes at the national and European levels. We are pioneers in applying the new provisions for the Golden Visa and work permits, offering our clients the confidence that their case is receiving the best possible management.'
        }
      }
    ]
  },
  footer: {
    address: { el: 'Μοναστηρίου 13, Θεσσαλονίκη', en: '13 Monastiriou st, Thessaloniki' },
    phone: '6970091155',
    email: 'info@sevastidoulaw.gr',
  }
};
