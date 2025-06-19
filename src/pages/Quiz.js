import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Quiz.css'; // Quiz.css is in the same 'pages' folder as Quiz.js

// Import all your downloaded images directly from the 'assests' folder
// Path: From 'src/pages', go up to 'src' (../), then into 'assests', then the image filename
import bohoCasualImage from '../assests/boho casual.jpg';
import bohoPartyImage from '../assests/boho party.jpg';
import bohoVacationImage from '../assests/boho vacation.jpg';
import bohoWorkImage from '../assests/boho work.jpg';
import chicCasualImage from '../assests/chic casual.jpg';
import chicPartyImage from '../assests/chic party.jpg';
import chicVacationImage from '../assests/chic vacation.jpg';
import chicWorkImage from '../assests/chic work.jpg';
import classicCasualImage from '../assests/classic casual.jpg';
import classicPartyImage from '../assests/classic party.jpg';
import classicVacationImage from '../assests/classic vacation.jpg';
import classicWorkImage from '../assests/classic work.jpg';
import streetwearCasualImage from '../assests/streetwear casual.jpg';
import streetwearPartyImage from '../assests/streetwear party.jpg';
import streetwearVacationImage from '../assests/streetwear vacation.jpg';
import streetwearWorkImage from '../assests/streetwear work.jpg';


const outfitSuggestions = {
    Classic: {
        "Work / Formal": {
            description: "Tailored blazer, structured vest, wide-leg trousers, and minimal accessories.",
            imageUrl: classicWorkImage
        },
        "Party / Festive": {
            description: "Flowing satin midi dress with a tie-neck, paired with a structured bag, refined watch, and elegant slingback heels.",
            imageUrl: classicPartyImage
        },
        "Casual / Street": {
            description: "A white tee and classic blue jeans, complemented by comfortable loafers.",
            imageUrl: classicCasualImage
        },
        "Vacation / Travel": {
            description: "A midi dress with ruffled detailing, complemented by a wide-brimmed sun hat, stylish sunglasses, a spacious tote bag, and comfortable flat sandals.",
            imageUrl: classicVacationImage
        }
    },
    Boho: {
        "Work / Formal": {
            description: "A soft satin wrap top and flowing wide-leg trousers, combined with pointed-toe heels, a structured belt, and chic sunglasses.",
            imageUrl: bohoWorkImage
        },
        "Party / Festive": {
            description: "A floral halter-neck dress, high heels, a structured bag, and delicate layered jewelry.",
            imageUrl: bohoPartyImage
        },
        "Casual / Street": {
            description: "A comfortable crop top with a tiered maxi skirt, layered with a cream cardigan, accessorized with black Mary Jane flats, a two-toned shoulder bag, and classic glasses.",
            imageUrl: bohoCasualImage
        },
        "Vacation / Travel": {
            description: "A loose-fitting, tiered, embroidered midi dress, a large straw tote bag, and simple flat-style sandals.",
            imageUrl: bohoVacationImage
        }
    },
    Chic: {
        "Work / Formal": {
            description: "A short-sleeved collared shirt and wide-leg trousers paired with a statement belt, sophisticated gold jewelry, sleek sunglasses, a structured handbag, a classic watch, and nude pointed-toe heels.",
            imageUrl: chicWorkImage
        },
        "Party / Festive": {
            description: "A ruffled camisole top, black wide-leg trousers, high-heeled sandals, and a structured handbag.",
            imageUrl: chicPartyImage
        },
        "Casual / Street": {
            description: "A puff-sleeve top with playful tie details, styled with wide-leg jeans, completed with pink high heels, a stylish tweed bag, and gold accessories.",
            imageUrl: chicCasualImage
        },
        "Vacation / Travel": {
            description: "A blue and white floral midi dress, a large straw tote bag, and comfortable white block-heeled sandals.",
            imageUrl: chicVacationImage
        }
    },
    Streetwear: {
        "Work / Formal": {
            description: "A classic trench coat layered over casual wear, paired with wide-leg jeans, comfortable sneakers, and a structured shoulder bag with subtle gold accessories.",
            imageUrl: streetwearWorkImage
        },
        "Party / Festive": {
            description: "A bold neon green spaghetti strap crop top with light blue wide-leg denim cargo jeans, accessorized with a matching neon green shoulder bag, light-tinted rectangular sunglasses, and checkered white slip-on sneakers.",
            imageUrl: streetwearPartyImage
        },
        "Casual / Street": {
            description: "A monochrome lavender ensemble featuring a relaxed-fit, long-sleeved button-up shirt worn over a matching lavender tank top, paired with light wash, wide-leg jeans, white sneakers, and a small, structured lavender top-handle bag.",
            imageUrl: streetwearCasualImage
        },
        "Vacation / Travel": {
            description: "An oversized, jersey-style top with a large number '99', paired with light blue denim shorts, comfortable green sneakers, a black crescent-shaped shoulder bag, and stylish hexagonal sunglasses.",
            imageUrl: streetwearVacationImage
        }
    }
};

const Quiz = () => {
    const [style, setStyle] = useState("");
    const [occasion, setOccasion] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!style || !occasion) {
            alert("Please select both a style and an occasion.");
            return;
        }

        const outfit = outfitSuggestions[style]?.[occasion] || { description: "No suggestion available for this combination.", imageUrl: "" };

        navigate("/result", {
            state: {
                style,
                occasion,
                outfit
            }
        });
    };

    return (
        <div className="quiz-container">
            <h2 className="quiz-title">👗 MyStyleDNA Quiz</h2>
            <form onSubmit={handleSubmit} className="quiz-form">
                <div>
                    <label htmlFor="style-select" className="quiz-label">
                        ✨ Select your fashion style:
                    </label>
                    <select
                        id="style-select"
                        value={style}
                        onChange={(e) => setStyle(e.target.value)}
                        required
                        className="quiz-select"
                    >
                        <option value="">-- Select Style --</option>
                        <option value="Classic">Classic</option>
                        <option value="Boho">Boho</option>
                        <option value="Chic">Chic</option>
                        <option value="Streetwear">Streetwear</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="occasion-select" className="quiz-label">
                        🎯 Select the occasion:
                    </label>
                    <select
                        id="occasion-select"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        required
                        className="quiz-select"
                    >
                        <option value="">-- Select Occasion --</option>
                        <option value="Work / Formal">Work / Formal</option>
                        <option value="Party / Festive">Party / Festive</option>
                        <option value="Casual / Street">Casual / Street</option>
                        <option value="Vacation / Travel">Vacation / Travel</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="quiz-button"
                >
                    Show My Style
                </button>
            </form>
        </div>
    );
};

export default Quiz;