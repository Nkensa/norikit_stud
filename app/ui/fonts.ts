import { Inter, Lusitana, Akaya_Kanadaka } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({ 
    weight: ['400', '700'],
    subsets: ['latin']  // Include Latin character set for Cyrillic support
    });

export const akaya_kanadaka = Akaya_Kanadaka({
    weight: ['400'],
    subsets: ['latin-ext'],

});
