export namespace AppData {
    export type IImageItem = { caption: string; base64: string };

    export interface IAppDataItem {
        name: string;
        label: string;
        filename: string;
        description?: string;
    }
    export const LOCATIONS: IAppDataItem[] = [
        {
            name: 'enchantedForest',
            label: 'Enchanted Forest',
            filename: 'EnchantedForest.jpeg',
            description:
                'Step into a world of magic and wonder, where ancient trees whisper secrets and mystical creatures roam. Rays of sunlight filter through the lush foliage, illuminating hidden paths and sparkling streams. Fairies flit among the flowers, and friendly woodland animals offer their guidance. The Enchanted Forest is a place where imagination takes flight.',
        },
        {
            name: 'magicalKingdom',
            label: 'Magical Kingdom',
            filename: 'MagicalKingdom.jpeg',
            description:
                'Enter a realm of grand castles, noble knights, and majestic rulers. The Magical Kingdom is a place of royal splendor and enchantment. Vibrant banners flutter in the breeze as residents celebrate in bustling markets and participate in thrilling tournaments. Every corner holds a captivating story, inviting young readers to join in the fairy tale adventures.',
        },
        {
            name: 'pirateIsland',
            label: 'Pirate Island',
            filename: 'PirateIsland.jpeg',
            description:
                'Ahoy, matey! Set sail for Pirate Island, a place of buried treasures, daring escapades, and swashbuckling heroes. Palm trees sway as the salty breeze fills the air, and the sound of crashing waves sets the rhythm of thrilling quests. From hidden coves to treacherous caves, young adventurers will uncover the mysteries of the high seas.',
        },
        {
            name: 'underwaterWorld',
            label: 'Underwater World',
            filename: 'UnderwaterWorld.jpeg',
            description:
                'Dive beneath the sparkling surface and discover a breathtaking underwater world. Schools of colorful fish dart among coral reefs, while graceful dolphins and majestic whales glide through the depths. In this magical realm, mermaids sing, and hidden treasures wait to be found. Young readers will be immersed in an aquatic wonderland.',
        },
        {
            name: 'fairyLand',
            label: 'Fairyland',
            filename: 'Fairyland.jpeg',
            description:
                "Enter a realm of delicate beauty and whimsical charm. In Fairyland, delicate petals float through the air, and tiny fairy wings flutter with grace. Mushroom houses dot the landscape, and glittering dust sprinkles a touch of magic in every corner. It's a place where dreams come true and where the power of imagination reigns supreme.",
        },
        {
            name: 'spaceAdventures',
            label: 'Space Adventures',
            filename: 'SpaceAdventures.jpeg',
            description:
                "Space Adventures: Blast off into a world of cosmic wonders and interstellar exploration. In Space Adventures, young astronauts journey among distant planets, sparkling stars, and mysterious galaxies. Rockets soar through the vast expanse as they uncover celestial secrets and encounter extraordinary extraterrestrial beings. The universe becomes a playground for young readers' imaginations.",
        },
        {
            name: 'imanginaryTown',
            label: 'Imaginary Town',
            filename: 'ImaginaryTown.jpeg',
            description:
                'Welcome to a town created solely by the power of imagination. In this vibrant place, anything is possible. Colorful buildings line the streets, and friendly residents engage in imaginative pursuits. From flying cars to talking animals, every corner holds delightful surprises. Imaginary Town invites young readers to dream, play, and invent their own stories.',
        },
        {
            name: 'secretGarden',
            label: 'Secret Garden',
            filename: 'SecretGarden.jpeg',
            description:
                'Behind a hidden door lies a secret garden, a sanctuary of tranquility and natural beauty. Lush greenery surrounds enchanting flowers in bloom, while butterflies dance among the fragrant blossoms. The gentle sound of a babbling brook soothes the senses, and curious creatures peep out from their hiding places. The Secret Garden is a place of discovery and peaceful reflection.',
        },
        {
            name: 'wildJungle',
            label: 'Wild Jungle',
            filename: 'WildJungle.jpeg',
            description:
                'Venture into the untamed depths of the Wild Jungle, a lush and vibrant world teeming with life. Towering trees create a canopy above, while exotic birds call from the branches. Hidden within the dense foliage are curious creatures and winding rivers that lead to thrilling escapades. The Wild Jungle is an untamed paradise, inviting young explorers to discover its secrets.',
        },
        {
            name: 'cozyFarm',
            label: 'Cozy Farm',
            filename: 'CozyFarm.jpeg',
            description:
                'Experience the joys of country life at the Cozy Farm. Rolling green fields stretch as far as the eye can see, dotted with grazing animals and charming farmhouses. Sunflowers sway in the gentle breeze, and the air is filled with the scent of fresh hay. Young readers will be immersed in the warmth and simplicity of farm life, where every day brings new adventures.',
        },
    ];

    export const SEASONS: IAppDataItem[] = [
        {
            name: 'spring',
            label: 'Spring',
            filename: 'Spring.jpeg',
            description:
                'As winter fades away, nature awakens in a burst of color and life. Delicate blossoms adorn trees, carpeting the ground with petals. The air is filled with the sweet scent of flowers, and gentle rains nourish the earth. Birds return from their migratory journeys, filling the air with their cheerful songs. Spring is a season of new beginnings, where the world comes alive with fresh energy and the promise of growth.',
        },
        {
            name: 'summer',
            label: 'Summer',
            filename: 'Summer.jpeg',
            description:
                "The sun shines brightly as summer envelops the land in warmth. Vibrant green foliage stretches as far as the eye can see, providing shade and shelter. Children's laughter fills the air as they splash in cool waters, and ice cream trucks bring delight with their sweet treats. Days are long, inviting outdoor adventures and lazy afternoons spent beneath the shade of trees. Summer is a season of carefree joy and endless possibilities.",
        },
        {
            name: 'autumn',
            label: 'Autumn',
            filename: 'Autumn.jpeg',
            description:
                "Trees ablaze with vibrant hues of red, orange, and gold signal the arrival of autumn. Crisp leaves rustle underfoot, creating a colorful carpet on the ground. The air carries a hint of earthy fragrance, and harvest festivals celebrate abundance. Cool breezes whisper secrets, and squirrels scurry to gather their winter supplies. Autumn is a season of change, where nature's beauty shines brightly before the quiet slumber of winter.",
        },
        {
            name: 'winter',
            label: 'Winter',
            filename: 'Winter.jpeg',
            description:
                'The world transforms into a winter wonderland as snowflakes gently fall from the sky. A blanket of white covers the ground, and icicles sparkle in the sunlight. Frosty breath hangs in the air, and cozy fires crackle in hearths. Snowmen come to life, and sleigh bells jingle in the distance. Winter is a season of enchantment, where the chill invites moments of warmth and togetherness.',
        },
    ];

    export const CHARACTER_TRAITS: IAppDataItem[] = [
        {
            name: 'adventurous',
            label: 'Adventurous',
            filename: 'Adventurous.png',
        },
        { name: 'brave', label: 'Brave', filename: 'Brave.png' },
        { name: 'chatty', label: 'Chatty', filename: 'Chatty.png' },
        { name: 'cheeky', label: 'Cheeky', filename: 'Cheeky.png' },
        { name: 'clever', label: 'Clever', filename: 'Clever.png' },
        { name: 'curious', label: 'Curious', filename: 'Curious.png' },
        { name: 'enchanting', label: 'Enchanting', filename: 'Enchanting.png' },
        { name: 'friendly', label: 'Friendly', filename: 'Friendly.png' },
        { name: 'funny', label: 'Funny', filename: 'Funny.png' },
        { name: 'graceful', label: 'Graceful', filename: 'Graceful.png' },
        {
            name: 'imaginative',
            label: 'Imaginative',
            filename: 'Imaginative.png',
        },
        { name: 'kind', label: 'Kind', filename: 'KindHearted.png' },
        { name: 'luminous', label: 'Luminous', filename: 'Luminous.png' },
        { name: 'magical', label: 'Magical', filename: 'Magical.png' },
        {
            name: 'mischievous',
            label: 'Mischievous',
            filename: 'Mischievous.png',
        },
        { name: 'mystical', label: 'Mystical', filename: 'Mystical.png' },
        { name: 'radiant', label: 'Radiant', filename: 'Radiant.png' },
        { name: 'sassy', label: 'Sassy', filename: 'Sassy.png' },
        {
            name: 'shapeshifting',
            label: 'Shapeshifting',
            filename: 'Shapeshifting.png',
        },
        { name: 'silly', label: 'Silly', filename: 'Silly.png' },
        { name: 'wise', label: 'Wise', filename: 'Wise.png' },
    ];

    export const CHARACTERS: IAppDataItem[] = [
        { name: 'cat', filename: 'Cat.png', label: 'Cat' },
        { name: 'centaur', filename: 'Centaur.png', label: 'Centaur' },
        { name: 'clown', filename: 'Clown.png', label: 'Clown' },
        { name: 'dolphin', filename: 'Dolphin.png', label: 'Dolphin' },
        { name: 'dragon', filename: 'Dragon.png', label: 'Dragon' },
        { name: 'elephant', filename: 'Elephant.png', label: 'Elephant' },
        { name: 'explorer', filename: 'Adventurer.png', label: 'Explorer' },
        { name: 'fairy', filename: 'Fairy.png', label: 'Fairy' },
        { name: 'fox', filename: 'Fox.png', label: 'Fox' },
        { name: 'genie', filename: 'Genie.png', label: 'Genie' },
        { name: 'gnome', filename: 'Gnome.png', label: 'Gnome' },
        { name: 'kangaroo', filename: 'Kangaroo.png', label: 'Kangaroo' },
        { name: 'knight', filename: 'Knight.png', label: 'Knight' },
        { name: 'leprechaun', filename: 'Elf.png', label: 'Leprechaun' },
        { name: 'lion', filename: 'Lion.png', label: 'Lion' },
        { name: 'mermaid', filename: 'Mermaid.png', label: 'Mermaid' },
        { name: 'monkey', filename: 'Monkey.png', label: 'Monkey' },
        { name: 'nymph', filename: 'Nymph.png', label: 'Nymph' },
        { name: 'owl', filename: 'Owl.png', label: 'Owl' },
        { name: 'parrot', filename: 'Parrot.png', label: 'Parrot' },
        { name: 'pegasus', filename: 'Pegasus.png', label: 'Pegasus' },
        { name: 'penguin', filename: 'Penguin.png', label: 'Penguin' },
        { name: 'phoenix', filename: 'Phoenix.png', label: 'Phoenix' },
        { name: 'pirate', filename: 'Pirate.png', label: 'Pirate' },
        { name: 'princess', filename: 'Princess.png', label: 'Princess' },
        { name: 'rabbit', filename: 'Rabbit.png', label: 'Rabbit' },
        { name: 'robot', filename: 'Robot.png', label: 'Robot' },
        { name: 'squirrel', filename: 'Squirrel.png', label: 'Squirrel' },
        { name: 'superhero', filename: 'Hero.png', label: 'Superhero' },
        { name: 'turtle', filename: 'Turtle.png', label: 'Turtle' },
        { name: 'unicorn', filename: 'Unicorn.png', label: 'Unicorn' },
        { name: 'wolf', filename: 'Wolf.png', label: 'Wolf' },
        { name: 'whale', filename: 'Whale.png', label: 'Whale' },
        { name: 'wizard', filename: 'Wizard.png', label: 'Wizard' },
        { name: 'boy', filename: 'Boy.png', label: 'Boy' },
        { name: 'girl', filename: 'Girl.png', label: 'Girl' },
    ];

    export const NAMES = [
        'Alice',
        'Ben',
        'Charlie',
        'Daisy',
        'Emily',
        'Finn',
        'Grace',
        'Henry',
        'Isabella',
        'Jack',
        'Lily',
        'Max',
        'Nora',
        'Oliver',
        'Poppy',
        'Ruby',
        'Sam',
        'Sophie',
        'Tom',
        'Zoe',
    ];

    export const SCENARIO: IAppDataItem[] = [
        {
            name: 'challenge',
            filename: 'Challenge.png',
            label: 'Lost and trying to find the way back home.',
        },
        {
            name: 'lost',
            filename: 'Lost.png',
            label: 'Overcoming fears or facing a personal challenge.',
        },
        {
            name: 'solving',
            filename: 'Solving.png',
            label: 'Solving a mystery or unraveling a secret.',
        },
        {
            name: 'help',
            filename: 'Help.png',
            label: 'Helping a friend in need or resolving a conflict.',
        },
        {
            name: 'map',
            filename: 'Map.png',
            label: 'Going on a treasure hunt or quest.',
        },
        {
            name: 'discover',
            filename: 'Discover.png',
            label: 'Discovering and exploring a hidden world or magical realm.',
        },
        {
            name: 'curse',
            filename: 'Curse.png',
            label: 'Overcoming a magical curse or breaking a spell.',
        },
        {
            name: 'animalRescue',
            filename: 'AnimalRescue.png',
            label: 'Saving a beloved character or endangered creature.',
        },
        {
            name: 'search',
            filename: 'Search.png',
            label: 'Finding a missing object or solving a riddle.',
        },
        {
            name: 'maze',
            filename: 'Maze.png',
            label: 'Navigating a tricky obstacle course or maze.',
        },
        {
            name: 'bully',
            filename: 'Bully.png',
            label: 'Dealing with a bully or standing up for what is right.',
        },
        {
            name: 'lesson',
            filename: 'Lesson.png',
            label: 'Learning a valuable lesson or moral dilemma.',
        },
        {
            name: 'winner',
            filename: 'Winner.png',
            label: 'Participating in a magical competition or contest.',
        },
        {
            name: 'rescue',
            filename: 'Rescue.png',
            label: 'Rescuing someone from a dangerous situation.',
        },
        {
            name: 'harmony',
            filename: 'Harmony.png',
            label: 'Bringing harmony to a troubled land or community.',
        },
    ];

    export const ILLUSTRATION_STYLES = [
        'Beatrix Potter',
        'Brian Kesinger',
        'Don Bluth',
        'Elsa Beskow',
        'Hayao Miyazaki',
        'Jasmine Becket-Griffith',
        'Marc Davis',
        'Raina Telgemeier',
        'Richard Scarry',
        'Tove Jansson',
        'Walt Kelly',
        'Yuko Shimizu',
    ];
}
