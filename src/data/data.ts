import cesar from "../images/cesar.jpg";
import eve from "../images/eve.jpg";
import inTheSun from "../images/inTheSun.jpg";
import mint from "../images/mint.jpg";
import nais from "../images/nais.jpg";
import sayan from "../images/sayan.jpg";
import tilda from "../images/tilda.jpg";

const Patterns = [
    {
        "pattern_id": "001",
        "image" : `${cesar}`,
        "name": "César",
        "designer": "Ma petite fabrique",
        "category": "Pantalon",
        "difficulty": ["Débutant", "Intermédiaire"],
        "sizes": ["34", "36", "38", "40", "42", "44", "46", "48"],
        "fabrics": ["coton léger", "satin", "satin de coton", "crêpe de viscose", "viscose un peu lourde", "crêpe léger"],
        "quantity": "2",
        "mercerie": ["1 fermeture éclair invisible de 18 cm", "Elastique de 3 cm de large", "20 cm de termocollant", "2 boutons recouverts de 15 min de diamètre", "90 cm de biais de 4 cm"],
        "instructions_link": "https://mapetitefabrique-patronsdecouture.fr/products/patron-pdf-cesar-pantalon"
    },
    {
        "pattern_id": "002",
        "image" : `${eve}`,
        "name": "Eve",
        "designer": "Sew over it",
        "category": "Robe",
        "difficulty": ["Intermédiaire"],
        "sizes": ["34", "36", "38", "40", "42", "44", "46", "48", "50"],
        "fabrics": ["coton léger", "viscose", "crêpe", "georgette"],
        "quantity": "3",
        "mercerie": ["2m de biais de 6mm"],
        "instructions_link": "https://sewoverit.com/products/eve-dress-sewing-pattern"
    },
    {
        "pattern_id": "003",
        "image" : `${inTheSun}`,
        "name": "In the sun",
        "designer": "Dress your body",
        "category": "Robe",
        "difficulty": ["Débutant", "Intermédiaire"],
        "sizes": ["34", "36", "38", "40", "42", "44", "46"],
        "fabrics": ["coton", "viscose", "crêpe de viscose", "crêpe léger"],
        "quantity": "1.60",
        "instructions_link": "https://dressyourbody.fr/fr/produit/robe-in-the-sun"
    },
    {
        "pattern_id": "004",
        "image" : `${mint}`,
        "name": "Mint",
        "designer": "Joli Lab",
        "category": "Jupe",
        "difficulty": ["Intermédiaire"],
        "sizes": ["34", "36", "38", "40", "42", "44", "46"],
        "fabrics": ["viscose", "crêpe de viscose", "mélange lin/viscose", "soie"],
        "quantity": "1.70",
        "mercerie": ["1 fermeture invisible de 22 cm", "2 ou 5 boutons d'environ 20 mm de diamètre", "Thermocollant pour la ceinture"],
        "instructions_link": "https://jolilab.fr/products/jupe-mint-patron-pochette-ou-pdf?gad_source=1&gclid=Cj0KCQjw7Py4BhCbARIsAMMx-_K3vRB-UzJM3CefG3QFiMO06oDqwxF0rNAV9LZNWPm4SHgUroLloq8aAuq5EALw_wcB"
    },
    {
        "pattern_id": "005",
        "image" : `${nais}`,
        "name": "Naïs",
        "designer": "Ma petite fabrique",
        "category": "Robe",
        "difficulty": ["Intermédiaire"],
        "sizes": ["34", "36", "38", "40", "42", "44", "46", "48"],
        "fabrics": ["viscose", "coton très fluide", "tencel", "crêpe très léger"],
        "quantity": "3.15",
        "mercerie": ["1 fermeture éclair invisible de 18 cm, Elastique de 3 cm de large, Termocollant"],
        "instructions_link": "https://mapetitefabrique-patronsdecouture.fr/products/patron-pdf-cesar-pantalon"
    },
    {
        "pattern_id": "006",
        "image" : `${sayan}`,
        "name": "Sayan",
        "designer": "Pretty mercerie",
        "category": "Blouse",
        "difficulty": ["Confirmé"],
        "sizes": ["34", "36", "38", "40", "42", "44", "46"],
        "fabrics": ["crêpe", "viscose", "coton", "mousseline", "tencel", "soie", "cupro", "coton brodé", "plumetis"],
        "quantity": "1.70",
        "mercerie": ["Termocollant", "8 boutons entre 8 et 12 mn de diamètre", "30 cm de biais"],
        "instructions_link": "https://mapetitefabrique-patronsdecouture.fr/products/patron-pdf-cesar-pantalon"
    },
    {
        "pattern_id": "007",
        "image" : `${tilda}`,
        "name": "Tilda",
        "designer": "Maison Fauve",
        "category": "Blouse",
        "difficulty": ["Intermédiaire"],
        "sizes": ["34", "36", "38", "40", "42", "44", "46", "48"],
        "fabrics": ["viscose", "coton", "tencel", "lin", "soie", "jacquard fin"],
        "quantity": "1.30",
        "mercerie": ["Termocollant", "1 bouton de 15 mn de diamètre",],
        "instructions_link": "https://www.maison-fauve.com/products/patron-blouse-tilda-patron-pdf-gratuit?srsltid=AfmBOorCeD9zItWulJ6GYy8KZ303etp6g5IkWwvdakvLRNDhs6jHZj7q"
    }
]

export default Patterns;
