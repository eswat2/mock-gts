const data = [
  {
    make: 'Abarth',
    model: '1500 Biposto Bertone B.A.T 1',
    group: 'N 100',
    year: 1952,
  },
  {
    make: 'Abarth',
    model: '500',
    group: 'N 100',
    year: 2009,
  },
  {
    make: 'Alfa Romeo',
    model: '4C Gr.3',
    group: 'Gr.3',
    year: 2014,
  },
  {
    make: 'Alfa Romeo',
    model: '4C Gr.4',
    group: 'Gr.4',
    year: 2014,
  },
  {
    make: 'Alfa Romeo',
    model: '4C Launch Edition',
    group: 'N 200',
    year: 2014,
  },
  {
    make: 'Alfa Romeo',
    model: 'GIULIA TZ2 carrozzata da ZAGATO CN.AR750106',
    group: 'Gr.X',
    year: 1965,
  },
  {
    make: 'Alfa Romeo',
    model: 'MiTo 1.4 T Sport',
    group: 'N 200',
    year: 2009,
  },
  {
    make: 'Alfa Romeo',
    model: '4C Gr.3 Road Car',
    group: 'N 500',
    year: 2014,
  },
  {
    make: 'Alpine',
    model: 'A110 1600S',
    group: 'N 100',
    year: 1972,
  },
  {
    make: 'Alpine',
    model: 'A110 Première Édition',
    group: 'N 300',
    year: 2017,
  },
  {
    make: 'Alpine',
    model: 'Vision GT',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'Alpine',
    model: 'Vision GT 2017',
    group: 'Gr.1',
    year: 2014,
  },
  {
    make: 'Alpine',
    model: 'Vision GT Race Mode',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'Amuse',
    model: 'S2000 GT1 Turbo',
    group: 'N 600',
    year: 2004,
  },
  {
    make: 'Aston Martin',
    model: 'DP-100 Vision GT',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'Aston Martin',
    model: 'Vulcan',
    group: 'Gr.X',
    year: 2015,
  },
  {
    make: 'Aston Martin',
    model: 'DB11',
    group: 'N 600',
    year: 2016,
  },
  {
    make: 'Aston Martin',
    model: 'DB3S CN.1',
    group: 'Gr.X',
    year: 1953,
  },
  {
    make: 'Aston Martin',
    model: 'One-77',
    group: 'N 800',
    year: 2011,
  },
  {
    make: 'Aston Martin',
    model: 'V12 Vantage GT3',
    group: 'Gr.3',
    year: 2012,
  },
  {
    make: 'Aston Martin',
    model: 'V8 Vantage S',
    group: 'N 400',
    year: 2015,
  },
  {
    make: 'Aston Martin',
    model: 'Vantage Gr.4',
    group: 'Gr.4',
    year: 2015,
  },
  {
    make: 'Audi',
    model: 'e-tron Vision GT',
    group: 'Gr.X',
    year: 2018,
  },
  {
    make: 'Audi',
    model: 'R18 (Team Joest)',
    group: 'Gr.1',
    year: 2011,
  },
  {
    make: 'Audi',
    model: 'R18 TDI (Team Joest)',
    group: 'Gr.1',
    year: 2011,
  },
  {
    make: 'Audi',
    model: 'R8 LMS (Team WRT)',
    group: 'Gr.3',
    year: 2015,
  },
  {
    make: 'Audi',
    model: 'Sport quattro S1 Pikes Peak',
    group: 'Gr.B Rally',
    year: 1987,
  },
  {
    make: 'Audi',
    model: 'Vision GT',
    group: 'Gr.1',
    year: 2018,
  },
  {
    make: 'Audi',
    model: 'R8 4.2 FSI R tronic',
    group: 'N 400',
    year: 2007,
  },
  {
    make: 'Audi',
    model: 'TT cup',
    group: 'Gr.4',
    year: 2016,
  },
  {
    make: 'Audi',
    model: 'TT Coupé 3.2 quattro',
    group: 'N 200',
    year: 2003,
  },
  {
    make: 'Audi',
    model: 'TTS Coupé',
    group: 'N 300',
    year: 2015,
  },
  {
    make: 'BMW',
    model: 'i3',
    group: 'N 200',
    year: 2015,
  },
  {
    make: 'BMW',
    model: 'M3 Coupé',
    group: 'N 300',
    year: 2003,
  },
  {
    make: 'BMW',
    model: 'M3 Coupé',
    group: 'N 400',
    year: 2007,
  },
  {
    make: 'BMW',
    model: 'M3 GT (BMW Motorsport)',
    group: 'Gr.3',
    year: 2011,
  },
  {
    make: 'BMW',
    model: 'M3 Sport Evolution',
    group: 'N 200',
    year: 1989,
  },
  {
    make: 'BMW',
    model: 'M4 Coupé',
    group: 'N 400',
    year: 2014,
  },
  {
    make: 'BMW',
    model: 'M4 Gr.4',
    group: 'Gr.4',
    year: 2014,
  },
  {
    make: 'BMW',
    model: 'M4 Safety Car',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'BMW',
    model: 'M6 GT3 (Walkenhorst Motorsport)',
    group: 'Gr.3',
    year: 2016,
  },
  {
    make: 'BMW',
    model: 'M6 GT3 M Power Livery',
    group: 'Gr.3',
    year: 2016,
  },
  {
    make: 'BMW',
    model: 'Vision GT',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'BMW',
    model: 'Z4 GT3',
    group: 'Gr.3',
    year: 2011,
  },
  {
    make: 'BMW',
    model: 'Z8',
    group: 'N 400',
    year: 2001,
  },
  {
    make: 'Bugatti',
    model: 'Vision GT',
    group: 'Gr.X',
    year: 2015,
  },
  {
    make: 'Bugatti',
    model: 'Vision GT Gr.1',
    group: 'Gr.1',
    year: 2015,
  },
  {
    make: 'Bugatti',
    model: 'Veyron 16.4',
    group: 'N 1000',
    year: 2013,
  },
  {
    make: 'Bugatti',
    model: 'Veyron Gr.4',
    group: 'Gr.4',
    year: 2013,
  },
  {
    make: 'Chaparral',
    model: '2X Vision GT',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'Chevrolet',
    model: 'Camaro SS',
    group: 'N 500',
    year: 2016,
  },
  {
    make: 'Chevrolet',
    model: 'Camaro Z28',
    group: 'N 300',
    year: 1969,
  },
  {
    make: 'Chevrolet',
    model: 'Camaro ZL1 1LE',
    group: 'N 700',
    year: 2018,
  },
  {
    make: 'Chevrolet',
    model: 'Corvette C7 Gr.3',
    group: 'Gr.3',
    year: 2014,
  },
  {
    make: 'Chevrolet',
    model: 'Corvette C7 Gr.3 Road Car',
    group: 'N 500',
    year: 2014,
  },
  {
    make: 'Chevrolet',
    model: 'Corvette C7 Gr.4',
    group: 'Gr.4',
    year: 2014,
  },
  {
    make: 'Chevrolet',
    model: 'Corvette Stingray (C7)',
    group: 'N 500',
    year: 2014,
  },
  {
    make: 'Chevrolet',
    model: 'Corvette Stingray Convertible (C3)',
    group: 'N 300',
    year: 1969,
  },
  {
    make: 'Chevrolet',
    model: 'Corvette Sting Ray Sport Coupe (C2)',
    group: 'N 200',
    year: 1963,
  },
  {
    make: 'Chevrolet',
    model: 'Corvette Stingray Racer Concept',
    group: 'Gr.X',
    year: 1959,
  },
  {
    make: 'Citroën',
    model: 'DS3 Racing',
    group: 'N 200',
    year: 2015,
  },
  {
    make: 'Citroën',
    model: 'GT by Citroën Gr.4',
    group: 'Gr.4',
    year: 2010,
  },
  {
    make: 'Citroën',
    model: 'GT by Citroën Race Car (Gr.3)',
    group: 'Gr.3',
    year: 2010,
  },
  {
    make: 'Citroën',
    model: 'GT by Citroën Road Car',
    group: 'N 500',
    year: 2010,
  },
  {
    make: 'Daihatsu',
    model: 'Copen Active Top',
    group: 'N 100',
    year: 2002,
  },
  {
    make: 'Daihatsu',
    model: 'COPEN RJ Vision GT',
    group: 'Gr.X',
    year: 2017,
  },
  {
    make: 'Dallara',
    model: 'SF19 Super Formula / Honda',
    group: 'Gr.X',
    year: 2019,
  },
  {
    make: 'Dallara',
    model: 'SF19 Super Formula / Toyota',
    group: 'Gr.X',
    year: 2019,
  },
  {
    make: 'De Tomaso',
    model: 'Pantera',
    group: 'N 300',
    year: 1971,
  },
  {
    make: 'Dodge',
    model: 'Challenger R/T',
    group: 'N 400',
    year: 1970,
  },
  {
    make: 'Dodge',
    model: 'Charger SRT Hellcat',
    group: 'N 700',
    year: 2015,
  },
  {
    make: 'Dodge',
    model: 'SRT Tomahawk GTS-R Vision GT',
    group: 'Gr.X',
    year: 2015,
  },
  {
    make: 'Dodge',
    model: 'SRT Tomahawk S Vision GT',
    group: 'Gr.X',
    year: 2015,
  },
  {
    make: 'Dodge',
    model: 'SRT Tomahawk Vision GT (Gr.1)',
    group: 'Gr.1',
    year: 2015,
  },
  {
    make: 'Dodge',
    model: 'SRT Tomahawk X Vision GT',
    group: 'Gr.X',
    year: 2015,
  },
  {
    make: 'Dodge',
    model: 'Viper Gr.4',
    group: 'Gr.4',
    year: 2013,
  },
  {
    make: 'Dodge',
    model: 'Viper GTS',
    group: 'N 600',
    year: 2013,
  },
  {
    make: 'Dodge',
    model: 'Viper GTS',
    group: 'N 500',
    year: 2002,
  },
  {
    make: 'Dodge',
    model: 'Viper SRT10 Coupe',
    group: 'N 500',
    year: 2006,
  },
  {
    make: 'Dodge',
    model: 'Viper SRT GT3-R',
    group: 'Gr.3',
    year: 2014,
  },
  {
    make: 'Dodge',
    model: 'Super Bee',
    group: 'N 300',
    year: 1970,
  },
  {
    make: 'Ferrari',
    model: '250 GT Berlinetta passo corto CN.2521',
    group: 'N 300',
    year: 1961,
  },
  {
    make: 'Ferrari',
    model: '250 GTO CN.3729GT',
    group: 'Gr.X',
    year: 1962,
  },
  {
    make: 'Ferrari',
    model: '330 P4',
    group: 'Gr.X',
    year: 1967,
  },
  {
    make: 'Ferrari',
    model: '365 GTB4',
    group: 'N 400',
    year: 1971,
  },
  {
    make: 'Ferrari',
    model: '458 Italia',
    group: 'N 600',
    year: 2009,
  },
  {
    make: 'Ferrari',
    model: '458 Italia Gr.4',
    group: 'Gr.4',
    year: 2009,
  },
  {
    make: 'Ferrari',
    model: '458 Italia GT3',
    group: 'Gr.3',
    year: 2013,
  },
  {
    make: 'Ferrari',
    model: '512 BB',
    group: 'N 400',
    year: 1976,
  },
  {
    make: 'Ferrari',
    model: 'Dino 246 GT',
    group: 'N 200',
    year: 1971,
  },
  {
    make: 'Ferrari',
    model: 'Enzo Ferrari',
    group: 'N 700',
    year: 2002,
  },
  {
    make: 'Ferrari',
    model: 'F40',
    group: 'N 500',
    year: 1992,
  },
  {
    make: 'Ferrari',
    model: 'F50',
    group: 'N 500',
    year: 1995,
  },
  {
    make: 'Ferrari',
    model: 'GTO',
    group: 'N 400',
    year: 1984,
  },
  {
    make: 'Ferrari',
    model: 'LaFerrari',
    group: 'N 1000',
    year: 2013,
  },
  {
    make: 'Fiat',
    model: '500 F',
    group: 'N 100',
    year: 1968,
  },
  {
    make: 'Fittipaldi Motors',
    model: 'EF7 Vision GTo by Pininfarina',
    group: 'Gr.X',
    year: 2017,
  },
  {
    make: 'Ford',
    model: 'F-150 SVT Raptor',
    group: 'N 400',
    year: 2011,
  },
  {
    make: 'Ford',
    model: 'Focus Gr.B Rally Car',
    group: 'Gr.B Rally',
    year: 2015,
  },
  {
    make: 'Ford',
    model: 'Focus ST',
    group: 'N 300',
    year: 2015,
  },
  {
    make: 'Ford',
    model: 'Ford GT',
    group: 'N 600',
    year: 2006,
  },
  {
    make: 'Ford',
    model: 'Ford GT LM Spec II Test Car',
    group: 'Gr.3',
    year: 2007,
  },
  {
    make: 'Ford',
    model: 'GT40 Mark I',
    group: 'N 400',
    year: 1966,
  },
  {
    make: 'Ford',
    model: 'Mark IV Race Car',
    group: 'Gr.X',
    year: 1967,
  },
  {
    make: 'Ford',
    model: 'Mustang Gr.3',
    group: 'Gr.3',
    year: 2015,
  },
  {
    make: 'Ford',
    model: 'Mustang Gr.4',
    group: 'Gr.4',
    year: 2015,
  },
  {
    make: 'Ford',
    model: 'Mustang Gr.B Rally Car',
    group: 'Gr.B Rally',
    year: 2015,
  },
  {
    make: 'Ford',
    model: 'Mustang GT Premium Fastback',
    group: 'N 400',
    year: 2015,
  },
  {
    make: 'Ford',
    model: 'Mustang Gr.3 Road Car',
    group: 'N 500',
    year: 2015,
  },
  {
    make: 'Ford',
    model: 'Mustang Mach 1',
    group: 'N 300',
    year: 1971,
  },
  {
    make: 'GT',
    model: 'F1500T-A',
    group: 'Gr.X',
    year: 1985,
  },
  {
    make: 'GT',
    model: 'Racing Kart 125 Shifter',
    group: 'Gr.X',
    year: 2010,
  },
  {
    make: 'GT',
    model: 'Red Bull X2014 Junior',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'GT',
    model: 'Red Bull X2014 Standard',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'GT',
    model: 'Red Bull X2019 Competition',
    group: 'Gr.X',
    year: 2019,
  },
  {
    make: 'Greddy',
    model: 'Fugu Z',
    group: 'N 300',
    year: 2015,
  },
  {
    make: 'GT Awards (SEMA)',
    model: 'Chris Holstrom Concepts',
    group: 'N 700',
    year: 2013,
  },
  {
    make: 'GT Awards (SEMA)',
    model: 'Mach Forty',
    group: 'N 800',
    year: 2012,
  },
  {
    make: 'Honda',
    model: 'Beat',
    group: 'N 100',
    year: 1991,
  },
  {
    make: 'Honda',
    model: 'Civic Type R (FK2)',
    group: 'N 300',
    year: 2016,
  },
  {
    make: 'Honda',
    model: 'EPSON NSX',
    group: 'Gr.2',
    year: 2008,
  },
  {
    make: 'Honda',
    model: 'Fit Hybrid',
    group: 'N 100',
    year: 2014,
  },
  {
    make: 'Honda',
    model: 'Project 2&4 powered by RC213V',
    group: 'Gr.X',
    year: 2015,
  },
  {
    make: 'Honda',
    model: 'Sports Vision GT',
    group: 'Gr.X',
    year: 2017,
  },
  {
    make: 'Honda',
    model: 'Integra Type R (DC2)',
    group: 'N 200',
    year: 1998,
  },
  {
    make: 'Honda',
    model: 'NSX',
    group: 'N 600',
    year: 2017,
  },
  {
    make: 'Honda',
    model: 'NSX Gr.3',
    group: 'Gr.3',
    year: 2017,
  },
  {
    make: 'Honda',
    model: 'NSX Gr.4',
    group: 'Gr.4',
    year: 2017,
  },
  {
    make: 'Honda',
    model: 'NSX Gr.B Rally Car',
    group: 'Gr.B Rally',
    year: 2017,
  },
  {
    make: 'Honda',
    model: 'NSX Type R',
    group: 'N 300',
    year: 1992,
  },
  {
    make: 'Honda',
    model: 'RAYBRIG NSX CONCEPT-GT',
    group: 'Gr.2',
    year: 2016,
  },
  {
    make: 'Honda',
    model: 'S660',
    group: 'N 100',
    year: 2015,
  },
  {
    make: 'Hyundai',
    model: 'Genesis Coupe 3.8 Track',
    group: 'N 300',
    year: 2013,
  },
  {
    make: 'Hyundai',
    model: 'Genesis Gr.3',
    group: 'Gr.3',
    year: 2013,
  },
  {
    make: 'Hyundai',
    model: 'Genesis Gr.4',
    group: 'Gr.4',
    year: 2013,
  },
  {
    make: 'Hyundai',
    model: 'Genesis Gr.B Rally Car',
    group: 'Gr.B Rally',
    year: 2013,
  },
  {
    make: 'Hyundai',
    model: 'N 2025 Vision GT',
    group: 'Gr.X',
    year: 2015,
  },
  {
    make: 'Hyundai',
    model: 'N 2025 Vision GT Gr.1',
    group: 'Gr.1',
    year: 2015,
  },
  {
    make: 'Infiniti',
    model: 'CONCEPT Vision GT',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'Jaguar',
    model: 'E-type Coupé',
    group: 'N 300',
    year: 1961,
  },
  {
    make: 'Jaguar',
    model: 'F-type Gr.3',
    group: 'Gr.3',
    year: 2015,
  },
  {
    make: 'Jaguar',
    model: 'F-type Gr.4',
    group: 'Gr.4',
    year: 2015,
  },
  {
    make: 'Jaguar',
    model: 'F-type R Coupé',
    group: 'N 500',
    year: 2015,
  },
  {
    make: 'Jaguar',
    model: 'Vision Gran Turismo Coupe',
    group: 'Gr.X',
    year: 2020,
  },
  {
    make: 'Jaguar',
    model: 'XJ13',
    group: 'Gr.X',
    year: 1966,
  },
  {
    make: 'Jaguar',
    model: 'XJR-9',
    group: 'Gr.1',
    year: 1988,
  },
  {
    make: 'KTM',
    model: 'X-BOW R',
    group: 'N 300',
    year: 2012,
  },
  {
    make: 'Lamborghini',
    model: 'Huracán GT3',
    group: 'Gr.3',
    year: 2015,
  },
  {
    make: 'Lamborghini',
    model: 'Aventador LP 700-4',
    group: 'N 700',
    year: 2011,
  },
  {
    make: 'Lamborghini',
    model: 'Aventador LP 750-4 Superveloce',
    group: 'N 800',
    year: 2015,
  },
  {
    make: 'Lamborghini',
    model: 'Countach 25th Anniversary',
    group: 'N 500',
    year: 1988,
  },
  {
    make: 'Lamborghini',
    model: 'Countach LP400',
    group: 'N 400',
    year: 1974,
  },
  {
    make: 'Lamborghini',
    model: 'Diablo GT',
    group: 'N 600',
    year: 2000,
  },
  {
    make: 'Lamborghini',
    model: 'Huracán Gr.4',
    group: 'Gr.4',
    year: 2015,
  },
  {
    make: 'Lamborghini',
    model: 'Huracán LP 610-4',
    group: 'N 600',
    year: 2015,
  },
  {
    make: 'Lamborghini',
    model: 'Miura P400 Bertone Prototype CN.0706',
    group: 'N 400',
    year: 1967,
  },
  {
    make: 'Lamborghini',
    model: 'Veneno',
    group: 'N 800',
    year: 2013,
  },
  {
    make: 'Lancia',
    model: 'DELTA HF Integrale Evoluzione',
    group: 'N 200',
    year: 1991,
  },
  {
    make: 'Lancia',
    model: 'Stratos',
    group: 'N 200',
    year: 1973,
  },
  {
    make: 'Lexus',
    model: 'au TOM’S RC F',
    group: 'Gr.2',
    year: 2016,
  },
  {
    make: 'Lexus',
    model: 'LC500',
    group: 'N 500',
    year: 2017,
  },
  {
    make: 'Lexus',
    model: 'LF-LC GT Vision GT',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'Lexus',
    model: "PETRONAS TOM'S SC430",
    group: 'Gr.2',
    year: 2008,
  },
  {
    make: 'Lexus',
    model: 'RC F',
    group: 'N 500',
    year: 2014,
  },
  {
    make: 'Lexus',
    model: 'RC F Gr.4',
    group: 'Gr.4',
    year: 2014,
  },
  {
    make: 'Lexus',
    model: 'RC F GT3 (Emil Frey Racing)',
    group: 'Gr.3',
    year: 2017,
  },
  {
    make: 'Lexus',
    model: 'RC F GT3 prototype (Emil Frey Racing)',
    group: 'Gr.3',
    year: 2016,
  },
  {
    make: 'Maserati',
    model: 'GranTurismo S',
    group: 'N 400',
    year: 2008,
  },
  {
    make: 'Mazda',
    model: 'Atenza Gr.3',
    group: 'Gr.3',
    year: 2016,
  },
  {
    make: 'Mazda',
    model: 'Atenza Sedan XD L Package',
    group: 'N 200',
    year: 2015,
  },
  {
    make: 'Mazda',
    model: 'Demio XD Touring',
    group: 'N 100',
    year: 2015,
  },
  {
    make: 'Mazda',
    model: 'Eunos Roadster (NA Special Package)',
    group: 'N 200',
    year: 1989,
  },
  {
    make: 'Mazda',
    model: 'LM55 Vision GT',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'Mazda',
    model: 'LM55 Vision GT Gr.1',
    group: 'Gr.1',
    year: 2014,
  },
  {
    make: 'Mazda',
    model: '787B',
    group: 'Gr.1',
    year: 1991,
  },
  {
    make: 'Mazda',
    model: 'Roadster S (ND)',
    group: 'N 100',
    year: 2015,
  },
  {
    make: 'Mazda',
    model: 'RX500',
    group: 'N 300',
    year: 1970,
  },
  {
    make: 'Mazda',
    model: 'RX-7 GT-X (FC)',
    group: 'N 200',
    year: 1990,
  },
  {
    make: 'Mazda',
    model: 'RX-7 Spirit R Type A (FD)',
    group: 'N 300',
    year: 2002,
  },
  {
    make: 'Mazda',
    model: 'Atenza Gr.4',
    group: 'Gr.4',
    year: 2016,
  },
  {
    make: 'Mazda',
    model: 'Atenza Gr.3 Road Car',
    group: 'N 500',
    year: 2016,
  },
  {
    make: 'McLaren',
    model: '650S Coupe',
    group: 'N 700',
    year: 2014,
  },
  {
    make: 'McLaren',
    model: '650S Gr.4',
    group: 'Gr.4',
    year: 2015,
  },
  {
    make: 'McLaren',
    model: '650S GT3',
    group: 'Gr.3',
    year: 2015,
  },
  {
    make: 'McLaren',
    model: 'F1',
    group: 'N 600',
    year: 1994,
  },
  {
    make: 'McLaren',
    model: 'F1 GTR - BMW (Kokusai Kaihatsu UK Racing)',
    group: 'Gr.3',
    year: 1995,
  },
  {
    make: 'McLaren',
    model: 'Ultimate Vision GT',
    group: 'Gr.X',
    year: 2017,
  },
  {
    make: 'McLaren',
    model: 'Ultimate Vision GT Gr.1',
    group: 'Gr.1',
    year: 2017,
  },
  {
    make: 'McLaren',
    model: 'MP4-12C',
    group: 'N 600',
    year: 2010,
  },
  {
    make: 'McLaren',
    model: 'P1 GTR',
    group: 'Gr.X',
    year: 2016,
  },
  {
    make: 'Mercedes-Benz',
    model: '300 SEL 6.8 AMG',
    group: 'Gr.X',
    year: 1971,
  },
  {
    make: 'Mercedes-Benz',
    model: 'A 45 AMG 4MATIC',
    group: 'N 400',
    year: 2013,
  },
  {
    make: 'Mercedes-Benz',
    model: 'AMG F1 W08 EQ Power+',
    group: 'Gr.X',
    year: 2017,
  },
  {
    make: 'Mercedes-Benz',
    model: 'MG F1 W08 EQ Power+ (Color Variation)',
    group: 'Gr.X',
    year: 2017,
  },
  {
    make: 'Mercedes-Benz',
    model: 'AMG GT S',
    group: 'N 500',
    year: 2014,
  },
  {
    make: 'Mercedes-Benz',
    model: 'AMG GT Safety Car',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'Mercedes-Benz',
    model: 'AMG GT3 (AMG-Team HTP-Motorsport)',
    group: 'Gr.3',
    year: 2015,
  },
  {
    make: 'Mercedes-Benz',
    model: 'AMG Vision GT',
    group: 'Gr.X',
    year: 2013,
  },
  {
    make: 'Mercedes-Benz',
    model: 'AMG Vision GT Racing Series',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'Mercedes-Benz',
    model: 'Sauber C9',
    group: 'Gr.1',
    year: 1989,
  },
  {
    make: 'Mercedes-Benz',
    model: 'SLR McLaren',
    group: 'N 600',
    year: 2009,
  },
  {
    make: 'Mercedes-Benz',
    model: 'SLS AMG',
    group: 'N 600',
    year: 2010,
  },
  {
    make: 'Mercedes-Benz',
    model: 'SLS AMG Gr.4',
    group: 'Gr.4',
    year: 2010,
  },
  {
    make: 'Mercedes-Benz',
    model: 'SLS AMG GT3',
    group: 'Gr.3',
    year: 2011,
  },
  {
    make: 'MINI',
    model: 'MINI Clubman Vision GT',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'MINI',
    model: 'MINI Cooper S',
    group: 'N 200',
    year: 2005,
  },
  {
    make: 'MINI',
    model: "Mini-Cooper 'S'",
    group: 'N 100',
    year: 1965,
  },
  {
    make: 'Mitsubishi',
    model: 'Concept XR-PHEV EVOLUTION Vision GT',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'Mitsubishi',
    model: 'Lancer Evolution Final Edition',
    group: 'N 300',
    year: 2015,
  },
  {
    make: 'Mitsubishi',
    model: 'Lancer Evolution Final Edition Gr.3',
    group: 'Gr.3',
    year: 2015,
  },
  {
    make: 'Mitsubishi',
    model: 'Lancer Evolution Final Edition Gr.4',
    group: 'Gr.4',
    year: 2015,
  },
  {
    make: 'Mitsubishi',
    model: 'Lancer Evolution Final Edition Gr.B Rally Car',
    group: 'Gr.B Rally',
    year: 2015,
  },
  {
    make: 'Mitsubishi',
    model: 'Lancer Evolution Final Edition Gr.B Road Car',
    group: 'N 500',
    year: 2015,
  },
  {
    make: 'Mitsubishi',
    model: 'Lancer Evolution IV GSR',
    group: 'N 300',
    year: 1996,
  },
  {
    make: 'Nissan',
    model: 'Fairlady Z 300ZX TwinTurbo 2 seater (Z32)',
    group: 'N 300',
    year: 1989,
  },
  {
    make: 'Nissan',
    model: 'Fairlady Z Version S (Z33)',
    group: 'N 300',
    year: 2007,
  },
  {
    make: 'Nissan',
    model: 'GT-R Gr.4',
    group: 'Gr.4',
    year: 2017,
  },
  {
    make: 'Nissan',
    model: 'GT-R Gr.B Rally Car',
    group: 'Gr.B Rally',
    year: 2017,
  },
  {
    make: 'Nissan',
    model: 'GT-R LM NISMO',
    group: 'Gr.1',
    year: 2017,
  },
  {
    make: 'Nissan',
    model: 'GT-R NISMO GT3 N 24 Schulze Motorsport',
    group: 'Gr.3',
    year: 2017,
  },
  {
    make: 'Nissan',
    model: 'GT-R Premium edition',
    group: 'N 600',
    year: 2017,
  },
  {
    make: 'Nissan',
    model: 'GT-R Safety Car',
    group: 'Gr.X',
    year: 2017,
  },
  {
    make: 'Nissan',
    model: 'MOTUL AUTECH GT-R',
    group: 'Gr.2',
    year: 2016,
  },
  {
    make: 'Nissan',
    model: 'CONCEPT 2020 Vision GT',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'Nissan',
    model: 'GT-R NISMO',
    group: 'N 600',
    year: 2017,
  },
  {
    make: 'Nissan',
    model: 'R92CP',
    group: 'Gr.1',
    year: 1992,
  },
  {
    make: 'Nissan',
    model: 'Skyline GT-R V・spec (R33)',
    group: 'N 300',
    year: 1997,
  },
  {
    make: 'Nissan',
    model: 'Skyline GT-R V・spec II (R32)',
    group: 'N 300',
    year: 1994,
  },
  {
    make: 'Nissan',
    model: 'Skyline GT-R V・spec II Nür (R34)',
    group: 'N 300',
    year: 2002,
  },
  {
    make: 'Nissan',
    model: 'XANAVI NISMO GT-R',
    group: 'Gr.2',
    year: 2008,
  },
  {
    make: 'Pagani',
    model: 'Huayra',
    group: 'N 700',
    year: 2013,
  },
  {
    make: 'Pagani',
    model: 'Zonda R',
    group: 'Gr.X',
    year: 2009,
  },
  {
    make: 'Peugeot',
    model: '208 GTi by Peugeot Sport',
    group: 'N 200',
    year: 2015,
  },
  {
    make: 'Peugeot',
    model: '908 HDi FAP - Team Peugeot Total',
    group: 'Gr.1',
    year: 2010,
  },
  {
    make: 'Peugeot',
    model: 'L500R HYbrid Vision GT, 2017',
    group: 'Gr.X',
    year: 2017,
  },
  {
    make: 'Peugeot',
    model: 'L750R HYbrid Vision GT, 2017',
    group: 'Gr.1',
    year: 2017,
  },
  {
    make: 'Peugeot',
    model: 'Vision GT',
    group: 'Gr.X',
    year: 2015,
  },
  {
    make: 'Peugeot',
    model: 'Vision GT (Gr.3)',
    group: 'Gr.3',
    year: 2015,
  },
  {
    make: 'Peugeot',
    model: 'RCZ Gr.3',
    group: 'Gr.3',
    year: 2015,
  },
  {
    make: 'Peugeot',
    model: 'RCZ Gr.4',
    group: 'Gr.4',
    year: 2015,
  },
  {
    make: 'Peugeot',
    model: 'RCZ Gr.B Rally Car',
    group: 'Gr.B Rally',
    year: 2015,
  },
  {
    make: 'Peugeot',
    model: 'RCZ GT Line',
    group: 'N 200',
    year: 2015,
  },
  {
    make: 'Plymouth',
    model: 'XNR Ghia Roadster',
    group: 'N 300',
    year: 1960,
  },
  {
    make: 'Pontiac',
    model: 'Firebird Trans Am',
    group: 'N 200',
    year: 1978,
  },
  {
    make: 'Porsche',
    model: '356 A/1500 GS GT Carrera Speedster',
    group: 'N 100',
    year: 1956,
  },
  {
    make: 'Porsche',
    model: '911 GT3 RS (991)',
    group: 'N 500',
    year: 2016,
  },
  {
    make: 'Porsche',
    model: '911 GT3 (996)',
    group: 'N 400',
    year: 2001,
  },
  {
    make: 'Porsche',
    model: '911 GT3 (997)',
    group: 'N 400',
    year: 2008,
  },
  {
    make: 'Porsche',
    model: '911 RSR (991)',
    group: 'Gr.3',
    year: 2017,
  },
  {
    make: 'Porsche',
    model: '962 C',
    group: 'Gr.1',
    year: 1988,
  },
  {
    make: 'Porsche',
    model: 'Cayman GT4 Clubsport',
    group: 'Gr.4',
    year: 2016,
  },
  {
    make: 'Porsche',
    model: 'Taycan Turbo S',
    group: 'Gr.X',
    year: 2019,
  },
  {
    make: 'Porsche',
    model: '919 Hybrid (Porsche Team)',
    group: 'Gr.1',
    year: 2017,
  },
  {
    make: 'RE Amemiya',
    model: 'FD3S RX-7',
    group: 'N 400',
    year: 2007,
  },
  {
    make: 'Renault',
    model: 'R8 Gordini',
    group: 'Gr.X',
    year: 1966,
  },
  {
    make: 'Renault Sport',
    model: 'Clio V6 24V',
    group: 'N 200',
    year: 2000,
  },
  {
    make: 'Renault Sport',
    model: "Clio R.S. 220 EDC Trophy '15",
    group: 'N 200',
    year: 2015,
  },
  {
    make: 'Renault Sport',
    model: "Clio R.S. 220 EDC Trophy '16",
    group: 'N 200',
    year: 2016,
  },
  {
    make: 'Renault Sport',
    model: 'Mégane Gr.4',
    group: 'Gr.4',
    year: 2011,
  },
  {
    make: 'Renault Sport',
    model: 'Mégane R.S. Trophy',
    group: 'N 300',
    year: 2011,
  },
  {
    make: 'Renault Sport',
    model: 'Mégane Trophy',
    group: 'Gr.4',
    year: 2011,
  },
  {
    make: 'Renault Sport',
    model: 'R.S.01',
    group: 'Gr.X',
    year: 2016,
  },
  {
    make: 'Renault Sport',
    model: 'R.S.01 GT3',
    group: 'Gr.3',
    year: 2016,
  },
  {
    make: 'Ruf',
    model: 'CTR3',
    group: 'N 700',
    year: 2007,
  },
  {
    make: 'Shelby',
    model: 'Cobra 427',
    group: 'N 500',
    year: 1966,
  },
  {
    make: 'Shelby',
    model: 'Cobra Daytona Coupe',
    group: 'Gr.X',
    year: 1964,
  },
  {
    make: 'Shelby',
    model: 'G.T.350',
    group: 'N 300',
    year: 1965,
  },
  {
    make: 'Subaru',
    model: 'BRZ S',
    group: 'N 200',
    year: 2017,
  },
  {
    make: 'Subaru',
    model: 'Falken Tire / Turn 14 Distribution BRZ',
    group: 'Gr.X',
    year: 2017,
  },
  {
    make: 'Subaru',
    model: 'Impreza 22B-STi Version',
    group: 'N 300',
    year: 1998,
  },
  {
    make: 'Subaru',
    model: 'VIZIV GT Vision GT',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'Subaru',
    model: 'WRX STI Isle of Man Time Attack Car',
    group: 'Gr.X',
    year: 2016,
  },
  {
    make: 'Subaru',
    model: 'WRX Gr.3',
    group: 'Gr.3',
    year: 2014,
  },
  {
    make: 'Subaru',
    model: 'WRX Gr.4',
    group: 'Gr.4',
    year: 2014,
  },
  {
    make: 'Subaru',
    model: 'WRX Gr.B Rally Car',
    group: 'Gr.B Rally',
    year: 2014,
  },
  {
    make: 'Subaru',
    model: 'WRX STI Type S',
    group: 'N 300',
    year: 2014,
  },
  {
    make: 'Subaru',
    model: 'WRX Gr.B Road Car',
    group: 'N 500',
    year: 2014,
  },
  {
    make: 'Suzuki',
    model: 'Swift Sport',
    group: 'N 100',
    year: 2007,
  },
  {
    make: 'Toyota',
    model: '86 GRMN',
    group: 'N 200',
    year: 2016,
  },
  {
    make: 'Toyota',
    model: 'GR Supra Racing Concept',
    group: 'Gr.3',
    year: 2018,
  },
  {
    make: 'Toyota',
    model: 'GR Supra RZ',
    group: 'N 300',
    year: 2019,
  },
  {
    make: 'Toyota',
    model: 'Sports 800',
    group: 'N 100',
    year: 1965,
  },
  {
    make: 'Toyota',
    model: 'MR2 GT-S',
    group: 'N 200',
    year: 1987,
  },
  {
    make: 'Toyota',
    model: 'Sprinter Trueno 3door 1600GT APEX (AE86)',
    group: 'N 100',
    year: 1983,
  },
  {
    make: 'Toyota',
    model: 'Supra 3.0GT Turbo A',
    group: 'N 300',
    year: 1988,
  },
  {
    make: 'Toyota',
    model: 'Supra RZ',
    group: 'N 300',
    year: 1997,
  },
  {
    make: 'Toyota',
    model: '2000GT',
    group: 'N 200',
    year: 1967,
  },
  {
    make: 'Toyota',
    model: '86 Gr.4',
    group: 'Gr.4',
    year: 2015,
  },
  {
    make: 'Toyota',
    model: '86 Gr.B Rally Car',
    group: 'Gr.B Rally',
    year: 2015,
  },
  {
    make: 'Toyota',
    model: '86 GT',
    group: 'N 200',
    year: 2015,
  },
  {
    make: 'Toyota',
    model: '86 GT Limited',
    group: 'N 200',
    year: 2016,
  },
  {
    make: 'Toyota',
    model: 'FT-1',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'Toyota',
    model: 'FT-1 Vision GT',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'Toyota',
    model: 'FT-1 Vision GT (Gr.3)',
    group: 'Gr.3',
    year: 2014,
  },
  {
    make: 'Toyota',
    model: 'S-FR',
    group: 'N 100',
    year: 2015,
  },
  {
    make: 'Toyota',
    model: 'S-FR Racing Concept',
    group: 'N 400',
    year: 2015,
  },
  {
    make: 'Toyota',
    model: 'TS050 - Hybrid (Toyota Gazoo Racing)',
    group: 'Gr.1',
    year: 2017,
  },
  {
    make: 'Toyota',
    model: 'TS030 Hybrid',
    group: 'Gr.1',
    year: 2012,
  },
  {
    make: 'Toyota',
    model: 'Tundra TRD Pro',
    group: 'N 400',
    year: 2019,
  },
  {
    make: 'Tesla Motors',
    model: 'Model S Signature Performance',
    group: 'Gr.X',
    year: 2012,
  },
  {
    make: 'TVR',
    model: 'Tuscan Speed 6',
    group: 'N 400',
    year: 2000,
  },
  {
    make: 'Volkswagen',
    model: 'Golf VII GTI',
    group: 'N 200',
    year: 2014,
  },
  {
    make: 'Volkswagen',
    model: 'GTI Roadster Vision GT',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'Volkswagen',
    model: 'GTI Supersport Vision GT',
    group: 'Gr.X',
    year: 2014,
  },
  {
    make: 'Volkswagen',
    model: 'GTI Vision GT (Gr.3)',
    group: 'Gr.3',
    year: 2014,
  },
  {
    make: 'Volkswagen',
    model: 'Sambabus Typ 2 (T1)',
    group: 'N 100',
    year: 1962,
  },
  {
    make: 'Volkswagen',
    model: 'Scirocco Gr.4',
    group: 'Gr.4',
    year: 2011,
  },
  {
    make: 'Volkswagen',
    model: '1200',
    group: 'N 100',
    year: 1966,
  },
  {
    make: 'Volkswagen',
    model: 'Beetle Gr.3',
    group: 'Gr.3',
    year: 2016,
  },
  {
    make: 'Zagato',
    model: 'IsoRivolta Zagato Vision GT',
    group: 'Gr.X',
    year: 2017,
  },
]

module.exports = {
  data,
}
