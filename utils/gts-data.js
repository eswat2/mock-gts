const list = [
  ['Abarth', '1500 Biposto Bertone B.A.T 1', 'N 100', 1952],
  ['Abarth', '500', 'N 100', 2009],
  ['Alfa Romeo', '4C Gr.3', 'Gr.3', 2014],
  ['Alfa Romeo', '4C Gr.4', 'Gr.4', 2014],
  ['Alfa Romeo', '4C Launch Edition', 'N 200', 2014],
  ['Alfa Romeo', 'GIULIA TZ2 carrozzata da ZAGATO CN.AR750106', 'Gr.X', 1965],
  ['Alfa Romeo', 'MiTo 1.4 T Sport', 'N 200', 2009],
  ['Alfa Romeo', '4C Gr.3 Road Car', 'N 500', 2014],
  ['Alpine', 'A110 1600S', 'N 100', 1972],
  ['Alpine', 'A110 Première Édition', 'N 300', 2017],
  ['Alpine', 'Vision Gran Turismo', 'Gr.X', 2014],
  ['Alpine', 'Vision Gran Turismo 2017', 'Gr.1', 2014],
  ['Alpine', 'Vision Gran Turismo Race Mode', 'Gr.X', 2014],
  ['Amuse', 'S2000 GT1 Turbo', 'N 600', 2004],
  ['Aston Martin', 'DP-100 Vision Gran Turismo', 'Gr.X', 2014],
  ['Aston Martin', 'Vulcan', 'Gr.X', 2015],
  ['Aston Martin', 'DB11', 'N 600', 2016],
  ['Aston Martin', 'DB3S CN.1', 'Gr.X', 1953],
  ['Aston Martin', 'DBR9 GT1', 'Gr.3', 2010],
  ['Aston Martin', 'One-77', 'N 800', 2011],
  ['Aston Martin', 'V12 Vantage GT3', 'Gr.3', 2012],
  ['Aston Martin', 'V8 Vantage S', 'N 400', 2015],
  ['Aston Martin', 'Vantage Gr.4', 'Gr.4', 2015],
  ['Audi', 'e-tron Vision Gran Turismo', 'Gr.X', 2018],
  ['Audi', 'R18 (Audi Sport Team Joest)', 'Gr.1', 2011],
  ['Audi', 'R18 TDI (Audi Sport Team Joest)', 'Gr.1', 2011],
  ['Audi', 'R8 LMS (Audi Sport Team WRT)', 'Gr.3', 2015],
  ['Audi', 'Sport quattro S1 Pikes Peak', 'Gr.B Rally', 1987],
  ['Audi', 'Vision Gran Turismo', 'Gr.1', 2018],
  ['Audi', 'R8 4.2 FSI R tronic', 'N 400', 2007],
  ['Audi', 'TT cup', 'Gr.4', 2016],
  ['Audi', 'TT Coupé 3.2 quattro', 'N 200', 2003],
  ['Audi', 'TTS Coupé', 'N 300', 2015],
  ['BMW', 'i3', 'N 200', 2015],
  ['BMW', 'M3 Coupé', 'N 300', 2003],
  ['BMW', 'M3 Coupé', 'N 400', 2007],
  ['BMW', 'M3 GT (BMW Motorsport)', 'Gr.3', 2011],
  ['BMW', 'M3 Sport Evolution', 'N 200', 1989],
  ['BMW', 'M4 Coupé', 'N 400', 2014],
  ['BMW', 'M4 Gr.4', 'Gr.4', 2014],
  ['BMW', 'M4 Safety Car', 'Gr.X', 2014],
  ['BMW', 'M6 GT3 (Walkenhorst Motorsport)', 'Gr.3', 2016],
  ['BMW', 'M6 GT3 M Power Livery', 'Gr.3', 2016],
  ['BMW', 'Vision Gran Turismo', 'Gr.X', 2014],
  ['BMW', 'Z4 GT3', 'Gr.3', 2011],
  ['BMW', 'Z8', 'N 400', 2001],
  ['Bugatti', 'Vision Gran Turismo', 'Gr.1', 2015],
  ['Bugatti', 'Vision Gran Turismo Gr.1', 'Gr.1', 2015],
  ['Bugatti', 'Veyron 16.4', 'N 1000', 2013],
  ['Bugatti', 'Veyron Gr.4', 'Gr.4', 2013],
  ['Chaparral', 'Chevrolet Chaparral 2X Vision Gran Turismo', 'Gr.X', 2014],
  ['Chevrolet', 'Camaro SS', 'N 500', 2016],
  ['Chevrolet', 'Camaro Z28', 'N 300', 1969],
  ['Chevrolet', 'Camaro ZL1 1LE Package', 'N 700', 2018],
  ['Chevrolet', 'Corvette C7 Gr.3', 'Gr.3', 2014],
  ['Chevrolet', 'Corvette C7 Gr.3 Road Car', 'N 500', 2014],
  ['Chevrolet', 'Corvette C7 Gr.4', 'Gr.4', 2014],
  ['Chevrolet', 'Corvette Stingray (C7)', 'N 500', 2014],
  ['Chevrolet', 'Corvette Stingray Convertible (C3)', 'N 300', 1969],
  ['Chevrolet', 'Corvette StingRay Racer Concept', 'Gr.X', 1959],
  ['Chevrolet', 'Corvette Sting Ray Sport Coupe (C2)', 'N 200', 1963],
  ['Citroën', 'DS3 Racing', 'N 200', 2015],
  ['Citroën', 'GT by Citroën Gr.4', 'Gr.4', 2010],
  ['Citroën', 'GT by Citroën Race Car (Gr.3)', 'Gr.3', 2010],
  ['Citroën', 'GT by Citroën Road Car', 'N 500', 2010],
  ['Daihatsu', 'Copen Active Top', 'N 100', 2002],
  ['Daihatsu', 'COPEN RJ Vision Gran Turismo', 'Gr.X', 2017],
  ['Dallara', 'SF19 Super Formula / Honda', 'Gr.X', 2019],
  ['Dallara', 'SF19 Super Formula / Toyota', 'Gr.X', 2019],
  ['De Tomaso', 'Pantera', 'N 300', 1971],
  ['Dodge', 'Challenger R/T', 'N 400', 1970],
  ['Dodge', 'Charger SRT Hellcat', 'N 700', 2015],
  ['Dodge', 'Charger SRT Hellcat Safety Car', 'Gr.X', 2015],
  ['Dodge', 'SRT Tomahawk GTS-R Vision Gran Turismo', 'Gr.X', 2015],
  ['Dodge', 'SRT Tomahawk S Vision Gran Turismo', 'Gr.X', 2015],
  ['Dodge', 'SRT Tomahawk Vision Gran Turismo (Gr.1)', 'Gr.1', 2015],
  ['Dodge', 'SRT Tomahawk X Vision Gran Turismo', 'Gr.X', 2015],
  ['Dodge', 'Super Bee', 'N 300', 1970],
  ['Dodge', 'Viper Gr.4', 'Gr.4', 2013],
  ['Dodge', 'Viper GTS', 'N 600', 2013],
  ['Dodge', 'Viper GTS', 'N 500', 2002],
  ['Dodge', 'Viper SRT10 Coupe', 'N 500', 2006],
  ['Dodge', 'Viper SRT GT3-R', 'Gr.3', 2014],
  ['Ferrari', '250 GT Berlinetta passo corto CN.2521', 'N 300', 1961],
  ['Ferrari', '250 GTO CN.3729GT', 'Gr.X', 1962],
  ['Ferrari', '330 P4', 'Gr.X', 1967],
  ['Ferrari', '365 GTB4', 'N 400', 1971],
  ['Ferrari', '458 Italia', 'N 600', 2009],
  ['Ferrari', '458 Italia Gr.4', 'Gr.4', 2009],
  ['Ferrari', '458 Italia GT3', 'Gr.3', 2013],
  ['Ferrari', '512 BB', 'N 400', 1976],
  ['Ferrari', 'Dino 246 GT', 'N 200', 1971],
  ['Ferrari', 'Enzo Ferrari', 'N 700', 2002],
  ['Ferrari', 'F40', 'N 500', 1992],
  ['Ferrari', 'F50', 'N 500', 1995],
  ['Ferrari', 'GTO', 'N 400', 1984],
  ['Ferrari', 'LaFerrari', 'N 1000', 2013],
  ['Fiat', '500 1.2 8V Lounge SS', 'N 100', 2008],
  ['Fiat', '500 F', 'N 100', 1968],
  ['Fittipaldi Motors', 'EF7 Vision Gran Turismo by Pininfarina', 'Gr.X', 2017],
  ['Ford', 'F-150 SVT Raptor', 'N 400', 2011],
  ['Ford', 'Focus Gr.B Rally Car', 'Gr.B Rally', 2015],
  ['Ford', 'Focus ST', 'N 300', 2015],
  ['Ford', 'Ford GT', 'N 600', 2006],
  ['Ford', "Ford GT '17", 'N 700', 2017],
  ['Ford', 'Ford GT LM Spec II Test Car', 'Gr.3', 2007],
  ['Ford', 'GT40 Mark I', 'N 400', 1966],
  ['Ford', 'Mark IV Race Car', 'Gr.X', 1967],
  ['Ford', 'Mustang Gr.3', 'Gr.3', 2015],
  ['Ford', 'Mustang Gr.4', 'Gr.4', 2015],
  ['Ford', 'Mustang Gr.B Rally Car', 'Gr.B Rally', 2015],
  ['Ford', 'Mustang GT Premium Fastback', 'N 400', 2015],
  ['Ford', 'Mustang Gr.3 Road Car', 'N 500', 2015],
  ['Ford', 'Mustang Mach 1', 'N 300', 1971],
  ['Gran Turismo', 'F1500T-A', 'Gr.X', 1985],
  ['Gran Turismo', 'Racing Kart 125 Shifter', 'Gr.X', 2010],
  ['Gran Turismo', 'Red Bull X2014 Junior', 'Gr.X', 2014],
  ['Gran Turismo', 'Red Bull X2014 Standard', 'Gr.X', 2014],
  ['Gran Turismo', 'Red Bull X2019 Competition', 'Gr.X', 2019],
  ['Greddy', 'Fugu Z', 'N 300', 2015],
  ['GT Awards (SEMA)', 'Chris Holstrom Concepts', 'N 700', 2013],
  ['GT Awards (SEMA)', 'Mach Forty', 'N 800', 2012],
  ['Honda', 'Beat', 'N 100', 1991],
  ['Honda', 'Civic Type R (EK)', 'N 200', 1998],
  ['Honda', 'Civic Type R (FK2)', 'N 300', 2016],
  ['Honda', 'EPSON NSX', 'Gr.2', 2008],
  ['Honda', 'Fit Hybrid', 'N 100', 2014],
  ['Honda', 'Project 2&4 powered by RC213V', 'Gr.X', 2015],
  ['Honda', 'Sports Vision Gran Turismo', 'Gr.X', 2017],
  ['Honda', 'Integra Type R (DC2)', 'N 200', 1998],
  ['Honda', 'NSX', 'N 600', 2017],
  ['Honda', 'NSX Gr.3', 'Gr.3', 2017],
  ['Honda', 'NSX Gr.4', 'Gr.4', 2017],
  ['Honda', 'NSX Gr.B Rally Car', 'Gr.B Rally', 2017],
  ['Honda', 'NSX Type R', 'N 300', 1992],
  ['Honda', 'RAYBRIG NSX CONCEPT-GT', 'Gr.2', 2016],
  ['Honda', 'S2000', 'N 200', 1999],
  ['Honda', 'S660', 'N 100', 2015],
  ['Honda', 'S800', 'N 100', 1966],
  ['Hyundai', 'Genesis Coupe 3.8 Track', 'N 300', 2013],
  ['Hyundai', 'Genesis Gr.3', 'Gr.3', 2013],
  ['Hyundai', 'Genesis Gr.4', 'Gr.4', 2013],
  ['Hyundai', 'Genesis Gr.B Rally Car', 'Gr.B Rally', 2013],
  ['Hyundai', 'N 2025 Vision Gran Turismo', 'Gr.X', 2015],
  ['Hyundai', 'N 2025 Vision Gran Turismo Gr.1', 'Gr.1', 2015],
  ['Infiniti', 'CONCEPT Vision Gran Turismo', 'Gr.X', 2014],
  ['Jaguar', 'D-type', 'Gr.X', 1954],
  ['Jaguar', 'E-type Coupé', 'N 300', 1961],
  ['Jaguar', 'F-type Gr.3', 'Gr.3', 2015],
  ['Jaguar', 'F-type Gr.4', 'Gr.4', 2015],
  ['Jaguar', 'F-type R Coupé', 'N 500', 2015],
  ['Jaguar', 'Vision Gran Turismo Coupé', 'Gr.X', 2020],
  ['Jaguar', 'XJ13', 'Gr.X', 1966],
  ['Jaguar', 'XJR-9', 'Gr.1', 1988],
  ['KTM', 'X-BOW R', 'N 300', 2012],
  ['Lamborghini', 'Huracán GT3', 'Gr.3', 2015],
  ['Lamborghini', 'Aventador LP 700-4', 'N 700', 2011],
  ['Lamborghini', 'Aventador LP 750-4 Superveloce', 'N 800', 2015],
  ['Lamborghini', 'Countach 25th Anniversary', 'N 500', 1988],
  ['Lamborghini', 'Countach LP400', 'N 400', 1974],
  ['Lamborghini', 'Diablo GT', 'N 600', 2000],
  ['Lamborghini', 'Huracán Gr.4', 'Gr.4', 2015],
  ['Lamborghini', 'Huracán LP 610-4', 'N 600', 2015],
  ['Lamborghini', 'Miura P400 Bertone Prototype CN.0706', 'N 400', 1967],
  ['Lamborghini', 'Veneno', 'N 800', 2013],
  ['Lancia', 'DELTA HF Integrale Evoluzione', 'N 200', 1991],
  ['Lancia', 'Stratos', 'N 200', 1973],
  ['Lexus', 'au TOM’S RC F', 'Gr.2', 2016],
  ['Lexus', 'LC500', 'N 500', 2017],
  ['Lexus', 'LF-LC GT “Vision Gran Turismo”', 'Gr.X', 2014],
  ['Lexus', "PETRONAS TOM'S SC430", 'Gr.2', 2008],
  ['Lexus', 'RC F', 'N 500', 2014],
  ['Lexus', 'RC F Gr.4', 'Gr.4', 2014],
  ['Lexus', 'RC F GT3 (Emil Frey Racing)', 'Gr.3', 2017],
  ['Lexus', 'RC F GT3 prototype (Emil Frey Racing)', 'Gr.3', 2016],
  ['Maserati', 'GranTurismo S', 'N 400', 2008],
  ['Mazda', 'Atenza Gr.3', 'Gr.3', 2016],
  ['Mazda', 'Atenza Sedan XD L Package', 'N 200', 2015],
  ['Mazda', 'Demio XD Touring', 'N 100', 2015],
  ['Mazda', 'Eunos Roadster (NA Special Package)', 'N 200', 1989],
  ['Mazda', 'LM55 Vision Gran Turismo', 'Gr.X', 2014],
  ['Mazda', 'LM55 Vision Gran Turismo Gr.1', 'Gr.1', 2014],
  ['Mazda', '787B', 'Gr.1', 1991],
  ['Mazda', 'Roadster S (ND)', 'N 100', 2015],
  ['Mazda', 'Roadster Touring Car', 'N 200', 1989],
  ['Mazda', 'RX500', 'N 300', 1970],
  ['Mazda', 'RX-7 GT-X (FC)', 'N 200', 1990],
  ['Mazda', 'RX-7 Spirit R Type A (FD)', 'N 300', 2002],
  ['Mazda', 'Atenza Gr.4', 'Gr.4', 2016],
  ['Mazda', 'Atenza Gr.3 Road Car', 'N 500', 2016],
  ['McLaren', '650S Coupe', 'N 700', 2014],
  ['McLaren', '650S Gr.4', 'Gr.4', 2015],
  ['McLaren', '650S GT3', 'Gr.3', 2015],
  ['McLaren', 'F1', 'N 600', 1994],
  ['McLaren', 'F1 GTR - BMW (Kokusai Kaihatsu UK Racing)', 'Gr.3', 1995],
  ['McLaren', 'Ultimate Vision Gran Turismo', 'Gr.X', 2017],
  ['McLaren', 'Ultimate Vision Gran Turismo Gr.1', 'Gr.1', 2017],
  ['McLaren', 'MP4-12C', 'N 600', 2010],
  ['McLaren', 'P1 GTR', 'Gr.X', 2016],
  ['Mercedes-Benz', '300 SEL 6.8 AMG', 'N 400', 1971],
  ['Mercedes-Benz', 'A 45 AMG 4MATIC', 'Gr.X', 2013],
  ['Mercedes-Benz', 'Mercedes-AMG F1 W08 EQ Power+', 'Gr.X', 2017],
  ['Mercedes-Benz', 'Mercedes-AMG F1 W08 EQ Power+ (Color Variation)', 'Gr.X', 2017],
  ['Mercedes-Benz', 'Mercedes-AMG GT S', 'N 500', 2014],
  ['Mercedes-Benz', 'Mercedes-AMG GT Safety Car', 'Gr.X', 2014],
  ['Mercedes-Benz', 'Mercedes-AMG GT3 (AMG-Team HTP-Motorsport)', 'Gr.3', 2015],
  ['Mercedes-Benz', 'AMG Vision Gran Turismo', 'Gr.X', 2013],
  ['Mercedes-Benz', 'AMG Vision Gran Turismo Racing Series', 'Gr.X', 2014],
  ['Mercedes-Benz', 'Sauber Mercedes C9', 'Gr.1', 1989],
  ['Mercedes-Benz', 'SLR McLaren', 'N 600', 2009],
  ['Mercedes-Benz', 'SLS AMG', 'N 600', 2010],
  ['Mercedes-Benz', 'SLS AMG Gr.4', 'Gr.4', 2010],
  ['Mercedes-Benz', 'SLS AMG GT3', 'Gr.3', 2011],
  ['MINI', 'MINI Clubman Vision Gran Turismo', 'Gr.X', 2014],
  ['MINI', 'MINI Cooper S', 'N 200', 2005],
  ['MINI', "Mini-Cooper 'S'", 'N 100', 1965],
  ['Mitsubishi', 'Concept XR-PHEV EVOLUTION Vision Gran Turismo', 'Gr.X', '2014'],
  ['Mitsubishi', 'GTO Twin Turbo', 'N 300', 1991],
  ['Mitsubishi', 'Lancer Evolution Final Edition', 'N 300', 2015],
  ['Mitsubishi', 'Lancer Evolution Final Edition Gr.3', 'Gr.3', 2015],
  ['Mitsubishi', 'Lancer Evolution Final Edition Gr.4', 'Gr.4', 2015],
  ['Mitsubishi', 'Lancer Evolution Final Edition Gr.B Rally Car', 'Gr.B Rally', '2015'],
  ['Mitsubishi', 'Lancer Evolution Final Edition Gr.B Road Car', 'N 500', '2015'],
  ['Mitsubishi', 'Lancer Evolution IV GSR', 'N 300', 1996],
  ['Nissan', '180SX Type X', 'N 200', 1996],
  ['Nissan', 'Fairlady Z 300ZX TwinTurbo 2 seater (Z32)', 'N 300', 1989],
  ['Nissan', 'Fairlady Z Version S (Z33)', 'N 300', 2007],
  ['Nissan', 'GT-R Gr.4', 'Gr.4', 2017],
  ['Nissan', 'GT-R Gr.B Rally Car', 'Gr.B Rally', 2017],
  ['Nissan', 'GT-R LM NISMO', 'Gr.1', 2017],
  ['Nissan', 'GT-R NISMO GT3 N24 Schulze Motorsport', 'Gr.3', 2017],
  ['Nissan', 'GT-R Premium edition', 'N 600', 2017],
  ['Nissan', 'GT-R Safety Car', 'Gr.X', 2017],
  ['Nissan', 'MOTUL AUTECH GT-R', 'Gr.2', 2016],
  ['Nissan', 'CONCEPT 2020 Vision Gran Turismo', 'Gr.X', 2014],
  ['Nissan', 'GT-R NISMO', 'N 600', 2017],
  ['Nissan', 'R92CP', 'Gr.1', 1992],
  ['Nissan', 'Skyline GT-R V・spec (R33)', 'N 300', 1997],
  ['Nissan', 'Skyline GT-R V・spec II (R32)', 'N 300', 1994],
  ['Nissan', 'Skyline GT-R V・spec II Nür (R34)', 'N 300', 2002],
  ['Nissan', "Silvia K's Dia Selection (S13)", 'N 200', 1990],
  ['Nissan', 'XANAVI NISMO GT-R', 'Gr.2', 2008],
  ['Pagani', 'Huayra', 'N 700', 2013],
  ['Pagani', 'Zonda R', 'Gr.X', 2009],
  ['Peugeot', '208 GTi by Peugeot Sport', 'N 200', 2015],
  ['Peugeot', '908 HDi FAP - Team Peugeot Total', 'Gr.1', 2010],
  ['Peugeot', 'L500R HYbrid Vision Gran Turismo', 'Gr.X', 2017],
  ['Peugeot', 'L750R HYbrid Vision Gran Turismo', 'Gr.1', 2017],
  ['Peugeot', 'Vision Gran Turismo', 'Gr.X', 2015],
  ['Peugeot', 'Vision Gran Turismo (Gr.3)', 'Gr.3', 2015],
  ['Peugeot', 'RCZ Gr.3', 'Gr.3', 2015],
  ['Peugeot', 'RCZ Gr.4', 'Gr.4', 2015],
  ['Peugeot', 'RCZ Gr.B Rally Car', 'Gr.B Rally', 2015],
  ['Peugeot', 'RCZ GT Line', 'N 200', 2015],
  ['Plymouth', 'XNR Ghia Roadster', 'N 300', 1960],
  ['Pontiac', 'Firebird Trans Am', 'N 200', 1978],
  ['Porsche', '356 A/1500 GS GT Carrera Speedster', 'N 100', 1956],
  ['Porsche', '911 Carrera RS Club Sport (993)', 'N 300', 1995],
  ['Porsche', '911 GT3 RS (991)', 'N 500', 2016],
  ['Porsche', '911 GT3 (996)', 'N 400', 2001],
  ['Porsche', '911 GT3 (997)', 'N 400', 2008],
  ['Porsche', '911 RSR (991)', 'Gr.3', 2017],
  ['Porsche', '911 Turbo (930)', 'N 300', 1981],
  ['Porsche', '962 C', 'Gr.1', 1988],
  ['Porsche', 'Cayman GT4 Clubsport', 'Gr.4', 2016],
  ['Porsche', '919 Hybrid (Porsche Team)', 'Gr.1', 2017],
  ['Porsche', 'Taycan Turbo S', 'Gr.X', 2019],
  ['RE Amemiya', 'FD3S RX-7', 'N 400', 2007],
  ['Renault', 'R8 Gordini', 'Gr.X', 1966],
  ['Renault Sport', "Clio R.S. 220 EDC Trophy '15", 'N 200', 2015],
  ['Renault Sport', "Clio R.S. 220 EDC Trophy '16", 'N 200', 2016],
  ['Renault Sport', 'Clio V6 24V', 'N 200', 2000],
  ['Renault Sport', 'Mégane Gr.4', 'Gr.4', 2011],
  ['Renault Sport', 'Mégane R.S. Trophy', 'N 300', 2011],
  ['Renault Sport', 'Mégane R.S. Trophy Safety Car', 'Gr.X', 2011],
  ['Renault Sport', 'Mégane Trophy', 'Gr.4', 2011],
  ['Renault Sport', 'R.S.01', 'Gr.X', 2016],
  ['Renault Sport', 'R.S.01 GT3', 'Gr.3', 2016],
  ['RUF', 'CTR3', 'N 700', 2007],
  ['Shelby', 'Cobra 427', 'N 500', 1966],
  ['Shelby', 'Cobra Daytona Coupe', 'Gr.X', 1964],
  ['Shelby', 'G.T.350', 'N 300', 1965],
  ['Subaru', 'BRZ S', 'N 200', 2017],
  ['Subaru', 'Falken Tire / Turn 14 Distribution BRZ', 'Gr.X', 2017],
  ['Subaru', 'Impreza 22B-STi Version', 'N 300', 1998],
  ['Subaru', 'Impreza Coupe WRX Type R STi Version VI', 'N 300', 1999],
  ['Subaru', 'VIZIV GT Vision Gran Turismo', 'Gr.X', 2014],
  ['Subaru', 'WRX STI Isle of Man Time Attack Car', 'Gr.X', 2016],
  ['Subaru', 'WRX Gr.3', 'Gr.3', 2014],
  ['Subaru', 'WRX Gr.4', 'Gr.4', 2014],
  ['Subaru', 'WRX Gr.B Rally Car', 'Gr.B Rally', 2014],
  ['Subaru', 'WRX STI Type S', 'N 300', 2014],
  ['Subaru', 'WRX Gr.B Road Car', 'N 500', 2014],
  ['Suzuki', 'Swift Sport', 'N 100', 2007],
  ['Toyota', '86 GRMN', 'N 200', 2016],
  ['Toyota', "86 GT 'Limited'", 'N 200', 2016],
  ['Toyota', 'Corolla Levin 3door 1600GT APEX (AE86)', 'N 100', 1983],
  ['Toyota', 'Crown Athlete G', 'N 300', 2013],
  ['Toyota', 'Crown Athlete G Safety Car', 'Gr.X', 2013],
  ['Toyota', 'GR Supra Racing Concept', 'Gr.3', 2018],
  ['Toyota', 'GR Supra RZ', 'N 300', 2019],
  ['Toyota', 'MR2 GT-S', 'N 200', 1987],
  ['Toyota', 'Sports 800', 'N 100', 1965],
  ['Toyota', 'Sprinter Trueno 3door 1600GT APEX (AE86)', 'N 100', 1983],
  ['Toyota', 'Supra 3.0GT Turbo A', 'N 300', 1988],
  ['Toyota', 'Supra RZ', 'N 300', 1997],
  ['Toyota', '2000GT', 'N 200', 1967],
  ['Toyota', '86 Gr.4', 'Gr.4', 2015],
  ['Toyota', '86 Gr.B Rally Car', 'Gr.B Rally', 2015],
  ['Toyota', '86 GT', 'N 200', 2015],
  ['Toyota', 'FT-1', 'Gr.X', 2014],
  ['Toyota', 'FT-1 Vision Gran Turismo', 'Gr.X', 2014],
  ['Toyota', 'FT-1 Vision Gran Turismo (Gr.3)', 'Gr.3', 2014],
  ['Toyota', 'S-FR', 'N 100', 2015],
  ['Toyota', 'S-FR Racing Concept', 'N 400', 2015],
  ['Toyota', 'TS050 - Hybrid (Toyota Gazoo Racing)', 'Gr.1', 2017],
  ['Toyota', 'TS030 Hybrid', 'Gr.1', 2012],
  ['Toyota', 'Tundra TRD Pro', 'N 400', 2019],
  ['Tesla Motors', 'Model S Signature Performance', 'Gr.X', 2012],
  ['TVR', 'Tuscan Speed 6', 'N 400', 2000],
  ['Volkswagen', 'Golf I GTI', 'N 100', 1983],
  ['Volkswagen', 'Golf VII GTI', 'N 200', 2014],
  ['Volkswagen', 'GTI Roadster Vision Gran Turismo', 'Gr.X', 2014],
  ['Volkswagen', 'GTI Supersport Vision Gran Turismo', 'Gr.X', 2014],
  ['Volkswagen', 'GTI Vision Gran Turismo (Gr.3)', 'Gr.3', 2014],
  ['Volkswagen', 'Sambabus Typ 2 (T1)', 'N 100', 1962],
  ['Volkswagen', 'Scirocco Gr.4', 'Gr.4', 2011],
  ['Volkswagen', '1200', 'N 100', 1966],
  ['Volkswagen', 'Beetle Gr.3', 'Gr.3', 2016],
  ['Zagato', 'IsoRivolta Vision Gran Turismo', 'Gr.X', 2017],
]

// NOTE:  Array destructuring...
const data = list.map((car) => {
  const [make, model, group, year] = car

  return { make, model, group, year }
})

module.exports = {
  data,
}
