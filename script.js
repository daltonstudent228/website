const supabaseProjectUrl =
    "https://pwpkvuteksryoirldkta.supabase.co";
const supabasePublishableKey =
    "sb_publishable_0tFYOdE--ZiP4erLqt91Pw_dXDejN24";
const supabaseClient = window.supabase?.createClient(
    supabaseProjectUrl,
    supabasePublishableKey
);

const loadingScreen = document.getElementById("loading-screen");
const loadingProgress = document.getElementById("loading-progress");
const loadingHandle = document.getElementById("loading-handle");
const loadingPercent = document.getElementById("loading-percent");
const loadingStep = document.getElementById("loading-step");
const loadingMessage = document.getElementById("loading-message");
const loadingSound = document.getElementById("loading-sound");
const enterRoomButton = document.getElementById("enter-room-button");
const flashlightCursor = document.getElementById("flashlight-cursor");

const verificationQuestionCount = 3;

const passwordScreen = document.getElementById("password-screen");
const leakScreen = document.getElementById("leak-screen");
const questionsScreen = document.getElementById("questions-screen");
const finalQuestionScreen = document.getElementById("final-question-screen");
const successScreen = document.getElementById("success-screen");
const moodScreen = document.getElementById("mood-screen");
const visitedPlacesScreen =
    document.getElementById("visited-places-screen");
const visitedPlaceDetailScreen =
    document.getElementById("visited-place-detail-screen");
const musicScreen = document.getElementById("music-screen");
const placeScreen = document.getElementById("place-screen");
const collectionScreen = document.getElementById("collection-screen");

const passwordInput = document.getElementById("password-input");
const passwordButton = document.getElementById("password-button");
const passwordError = document.getElementById("password-error");
const globalBackButton = document.getElementById("global-back-button");
const globalNextButton = document.getElementById("global-next-button");
const visitedPlacesButton =
    document.getElementById("visited-places-button");
const soundToggleButton = document.getElementById("sound-toggle-button");
const soundToggleIcon = document.getElementById("sound-toggle-icon");
const questionsSoundtrack =
    document.getElementById("questions-soundtrack");
const buttonClickSound =
    document.getElementById("button-click-sound");

const startQuestionsButton =
    document.getElementById("start-questions-button");

const deniedIntro = document.getElementById("denied-intro");
const securityTerminal = document.getElementById("security-terminal");
const securityLog = document.getElementById("security-log");
const securityLoading = document.getElementById("security-loading");
const securityLoadingProgress =
    document.getElementById("security-loading-progress");
const securityLoadingPercent =
    document.getElementById("security-loading-percent");
const accessDeniedSound =
    document.getElementById("access-denied-sound");
const verificationLoadingSound =
    document.getElementById("verification-loading-sound");
const deniedCode = document.getElementById("denied-code");
const securityStartButtonLabel =
    startQuestionsButton.querySelector("span");

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const answerButton = document.getElementById("answer-button");
const answerError = document.getElementById("answer-error");

const finalQuestionText =
    document.getElementById("final-question-text");

const finalAnswerInput =
    document.getElementById("final-answer-input");

const finalAnswerButton =
    document.getElementById("final-answer-button");

const finalAnswerError =
    document.getElementById("final-answer-error");

const continueButton =
    document.getElementById("continue-button");
const grantedLock = document.getElementById("granted-lock");
const grantedTitle = document.getElementById("granted-title");
const grantedMessage = document.getElementById("granted-message");
const lockOpenSound = document.getElementById("lock-open-sound");
const accessGrantedSound =
    document.getElementById("access-granted-sound");
const brokenTvVideo = document.getElementById("broken-tv-video");
const brokenTvSound = document.getElementById("broken-tv-sound");
const gigadenVideo = document.getElementById("gigaden-video");

const questionVideos = document.querySelectorAll(".question-video");

const moodCards = document.querySelectorAll(".mood-card");
const selectedMood = document.getElementById("selected-mood");
const foodChoiceButtons = document.querySelectorAll(".food-choice");
const randomMoodButton = document.getElementById("random-mood-button");
const moodReadyButton = document.getElementById("mood-ready-button");

const musicMood = document.getElementById("music-mood");
const moodDetailFormat =
    document.getElementById("mood-detail-format");
const moodMusic = document.getElementById("mood-music");
const moodAudioLabel =
    document.getElementById("mood-audio-label");
const bestRatedPlaceButton =
    document.getElementById("best-rated-place-button");
const randomPlaceButton = document.getElementById("random-place-button");
const moodListButton = document.getElementById("mood-list-button");
const includeVisitedToggle =
    document.getElementById("include-visited-toggle");
const randomPlaceReveal =
    document.getElementById("random-place-reveal");

const placeCard = document.getElementById("place-card");
const placeImage = document.getElementById("place-image");
const placeTitle = document.getElementById("place-title");
const placeDescription = document.getElementById("place-description");
const placeDetails = document.getElementById("place-details");
const placeRating = document.getElementById("place-rating");
const placeOpenHint = document.getElementById("place-open-hint");
const placeType = document.getElementById("place-type");
const placeCuisine = document.getElementById("place-cuisine");
const placeDuration = document.getElementById("place-duration");
const placeFear = document.getElementById("place-fear");
const placePrice = document.getElementById("place-price");
const placeExpandedContent =
    document.getElementById("place-expanded-content");
const placeRatingBreakdown =
    document.getElementById("place-rating-breakdown");
const placeGallery = document.getElementById("place-gallery");
const restaurantContent =
    document.getElementById("restaurant-content");
const placeComment = document.getElementById("place-comment");
const placeCommentText =
    document.getElementById("place-comment-text");
const placeLinkSection =
    document.getElementById("place-link-section");
const placeLink = document.getElementById("place-link");
const collapsePlaceButton =
    document.getElementById("collapse-place-button");
const rerollPlaceButton = document.getElementById("reroll-place-button");
const openCollectionButton = document.getElementById("open-collection-button");
const visitPlaceButton = document.getElementById("visit-place-button");
const deleteVisitDialog =
    document.getElementById("delete-visit-dialog");
const cancelDeleteVisit =
    document.getElementById("cancel-delete-visit");
const confirmDeleteVisit =
    document.getElementById("confirm-delete-visit");
const deleteVisitStatus =
    document.getElementById("delete-visit-status");
const placesCollection = document.getElementById("places-collection");
const collectionEmpty = document.getElementById("collection-empty");
const backToPlaceButton = document.getElementById("back-to-place-button");
const visitedPlacesPlaceholder =
    document.getElementById("visited-places-placeholder");
const visitedPlacesList =
    document.getElementById("visited-places-list");
const visitedPlacesContainer =
    document.getElementById("visited-places-container");
const visitedAuthPanel =
    document.getElementById("visited-auth-panel");
const visitedAuthEmail =
    document.getElementById("visited-auth-email");
const visitedAuthPassword =
    document.getElementById("visited-auth-password");
const visitedAuthError =
    document.getElementById("visited-auth-error");
const visitedAuthSubmit =
    document.getElementById("visited-auth-submit");
const visitedSignOut =
    document.getElementById("visited-sign-out");
const visitedDetailImage =
    document.getElementById("visited-detail-image");
const visitedDetailMood =
    document.getElementById("visited-detail-mood");
const visitedDetailTitle =
    document.getElementById("visited-detail-title");
const visitedDetailDescription =
    document.getElementById("visited-detail-description");
const visitedDetailRating =
    document.getElementById("visited-detail-rating");
const authorImpression =
    document.getElementById("author-impression");
const denisImpression =
    document.getElementById("denis-impression");
const authorImpressionStatus =
    document.getElementById("author-impression-status");
const denisImpressionStatus =
    document.getElementById("denis-impression-status");
const visitedMediaInput =
    document.getElementById("visited-media-input");
const visitedMediaGallery =
    document.getElementById("visited-media-gallery");
const visitedGallerySection =
    document.getElementById("visited-gallery-section");
const visitedMediaEmpty =
    document.getElementById("visited-media-empty");
const visitedGalleryLightbox =
    document.getElementById("visited-gallery-lightbox");
const visitedGalleryStage =
    document.getElementById("visited-gallery-stage");
const visitedGalleryClose =
    document.getElementById("visited-gallery-close");
const visitedGalleryPrevious =
    document.getElementById("visited-gallery-previous");
const visitedGalleryNext =
    document.getElementById("visited-gallery-next");
const visitedGalleryCounter =
    document.getElementById("visited-gallery-counter");

const eventDataFiles = [
    "data/happy.json",
    "data/classic.json",
    "data/romantic.json",
    "data/ceremonial.json",
    "data/creative.json",
    "data/mystical.json"
];

const ratingLabels = {
    denis: "Интерес для Дениса",
    author: "Интерес для меня",
    price: "Цена",
    emotions: "Эмоции",
    overall: "Общий рейтинг"
};

let places = [];

function formatRating(value) {
    return Number.isInteger(value)
        ? `${value}/10`
        : `${Number(value.toFixed(2))}/10`;
}

function normalizeEvent(event) {
    const ratingEntries = Object.entries(event.ratings || {});
    const ratingValues = ratingEntries.map(([, value]) => Number(value));
    const averageRating = ratingValues.length
        ? ratingValues.reduce((sum, value) => sum + value, 0) /
            ratingValues.length
        : 0;

    return {
        ...event,
        rating: formatRating(averageRating),
        ratingValue: averageRating,
        ratings: ratingEntries.map(([key, value]) => [
            ratingLabels[key] || key,
            formatRating(Number(value))
        ])
    };
}

async function loadEventData() {
    const eventGroups = await Promise.all(
        eventDataFiles.map(async file => {
            try {
                const response = await fetch(file, {
                    cache: "no-store"
                });

                if (!response.ok) {
                    throw new Error(`Не удалось загрузить ${file}`);
                }

                return await response.json();
            } catch (error) {
                console.error(`Ошибка загрузки ${file}:`, error);
                return [];
            }
        })
    );

    places = eventGroups
        .flat()
        .filter(event => !event.isExample)
        .map(normalizeEvent);
}

const eventDataReady = loadEventData().then(async () => {
    await initializeSupabaseArchive();
});

const moodPageThemes = {
    "Весёлое": {
        image: "media/happy-background.png",
        color: "#E89A32"
    },
    "Классика": {
        image: "media/classic-background.png",
        color: "#A64914"
    },
    "Романтичное": {
        image: "media/romantic-background.png",
        color: "#c27272",
        shadeOpacity: 1
    },
    "Торжественное": {
        image: "media/ceremonial-background.jpeg",
        color: "#7B4AA3"
    },
    "Творческое": {
        image: "media/creative-background.png",
        color: "#327320"
    },
    "Мистическое": {
        image: "media/mystery-background.png",
        color: "#A72B2B",
        shadeOpacity: 0
    }
};

const moodPlaylists = {
    "Весёлое": [
        "media/Целоваться.mp3",
        "media/круче чем вы.mp3",
        "media/так похуй.mp3",
        "media/ты че обиделась.mp3",
        "media/супермаркет.mp3",
        "media/засосы.mp3",
        "media/sexyswag2010.mp3",
        "media/танцор.mp3",
        "media/толпы.mp3"
    ],
    "Романтичное": [
        "media/Art Deco.mp3",
        "media/Slow Down.mp3",
        "media/Stolen Dance.mp3",
        "media/Two Feet - I Feel Like Im Drowning (lyrics).mp3",
        "media/Пошлая Молли Клеопатри slowed reverb.mp3",
        "media/og buda - биг бой слайм [ treepside remix ].mp3",
        "media/ParisLove.mp3"
    ],
    "Торжественное": [
        "media/Dark Royalty Core Classical Music.mp3"
    ],
    "Мистическое": [
        "media/In The Woods｜Darkwood Atmospheric Playlist.mp3"
    ],
    "Творческое": [
        "media/Cool for the Summer.mp3",
        "media/Girlfriend.mp3",
        "media/Selena Gomez - Slow Down.mp3",
        "media/Bad Blood.mp3",
        "media/I Kissed A Girl.mp3",
        "media/Boom.mp3",
        "media/Sexy B!tch.mp3",
        "media/Hey Baby (Drop It To The Floor).mp3"
    ],
    "Классика": [
        "media/Thnks fr th Mmrs.mp3",
        "media/Dance, Dance.mp3",
        "media/Courtesy Call.mp3",
        "media/Creep.mp3",
        "media/Smells Like Teen Spirit.mp3",
        "media/Youre So Creepy.mp3"
    ]
};

let activeMoodPlaylistName = "";
let activeMoodPlaylist = [];
let activeMoodTrackIndex = 0;

function getMoodTrackTitle(source) {
    return decodeURIComponent(
        source.split("/").pop().replace(/\.mp3$/i, "")
    );
}

function playMoodTrack(index) {
    if (!activeMoodPlaylist.length) {
        return;
    }

    activeMoodTrackIndex =
        (index + activeMoodPlaylist.length) %
        activeMoodPlaylist.length;
    const source = activeMoodPlaylist[activeMoodTrackIndex];
    moodMusic.src = source;
    moodMusic.load();
    moodAudioLabel.textContent =
        `СЕЙЧАС ИГРАЕТ / ${getMoodTrackTitle(source)}`;
    moodMusic.play().catch(() => {});
}

function startMoodPlaylist(moodName) {
    const playlist = moodPlaylists[moodName] || [];
    if (!playlist.length) {
        activeMoodPlaylistName = "";
        activeMoodPlaylist = [];
        activeMoodTrackIndex = 0;
        moodMusic.pause();
        moodMusic.removeAttribute("src");
        moodMusic.load();
        moodAudioLabel.textContent = "ATMOSPHERE AUDIO / SOON";
        return;
    }

    if (
        activeMoodPlaylistName === moodName &&
        moodMusic.getAttribute("src")
    ) {
        moodMusic.play().catch(() => {});
        return;
    }

    activeMoodPlaylistName = moodName;
    activeMoodPlaylist = playlist;
    playMoodTrack(0);
}

moodMusic.addEventListener("ended", () => {
    playMoodTrack(activeMoodTrackIndex + 1);
});

let currentPlaceIndex = -1;
let isRandomPlaceRevealing = false;

function startSiteMusic() {
    moodMusic.play().catch(() => {});
}

let currentQuestionIndex = 0;
let currentQuestionId = null;
let answeredQuestionIds = new Set();
let questionRequestId = 0;
const screenHistory = [];
let securityTimers = [];
let securitySequenceId = 0;
let grantedTimers = [];
let grantedSequenceId = 0;
let isSoundMuted = false;
let selectedMoodValue = "";
const selectedFoodChoices = new Set();
const visitedPlaceIndexes = new Set();
let currentVisitedPlaceIndex = -1;
let supabaseSession = null;
let pendingVisitedPlaceIndex = -1;
let visitedJournalCache = {};

visitedPlacesButton.addEventListener("click", async () => {
    await eventDataReady;
    showScreen(visitedPlacesScreen);
    await openVisitedArchive();
});

function startFirstScreenSoundtrack() {
    if (!loadingScreen.classList.contains("hidden")) {
        questionsSoundtrack.play().catch(() => {});
    }
}

function playButtonClickSound() {
    buttonClickSound.currentTime = 0;
    buttonClickSound.play().catch(() => {});
}

function toggleSound() {
    const willMute = !isSoundMuted;

    if (willMute) {
        playButtonClickSound();
    }

    isSoundMuted = willMute;

    document.querySelectorAll("audio").forEach(audio => {
        audio.muted = isSoundMuted;
    });
    gigadenVideo.muted = isSoundMuted;

    soundToggleIcon.classList.toggle("is-muted", isSoundMuted);
    const actionLabel =
        isSoundMuted ? "Включить звук" : "Выключить звук";
    soundToggleButton.setAttribute("aria-label", actionLabel);
    soundToggleButton.title = actionLabel;

    if (!isSoundMuted) {
        playButtonClickSound();
    }
}

soundToggleButton.addEventListener("click", toggleSound);

document.addEventListener("click", event => {
    const button = event.target instanceof Element
        ? event.target.closest("button")
        : null;

    if (
        !button ||
        button.disabled ||
        button === globalNextButton ||
        button === soundToggleButton
    ) {
        return;
    }

    playButtonClickSound();
});

const loadingStages = [
    {
        progress: 20,
        step: "ЗАГРУЗКА МОДУЛЕЙ",
        message: "Подключение к защищённому каналу..."
    },
    {
        progress: 48,
        step: "СИНХРОНИЗАЦИЯ",
        message: "Проверка параметров сеанса..."
    },
    {
        progress: 76,
        step: "СБОРКА ИНТЕРФЕЙСА",
        message: "Подготовка испытания..."
    },
    {
        progress: 100,
        step: "ГОТОВО",
        message: "Добро пожаловать в систему."
    }
];

function finishLoading() {
    loadingScreen.classList.add("loading-ready");
    enterRoomButton.disabled = false;
}

function startLoadingSequence() {
    let stageIndex = 0;
    const loadingDuration = 5000;
    const loadingStartedAt = Date.now();

    loadingSound.play().catch(() => {});

    const loadingTimer = window.setInterval(() => {
        const elapsed = Date.now() - loadingStartedAt;
        const progress = Math.min(
            Math.round((elapsed / loadingDuration) * 100),
            100
        );

        while (
            stageIndex < loadingStages.length - 1 &&
            progress > loadingStages[stageIndex].progress
        ) {
            stageIndex++;
        }

        const stage = loadingStages[stageIndex];
        loadingProgress.style.width = `${progress}%`;
        loadingHandle.style.left = `${progress}%`;
        loadingPercent.textContent = `${progress}%`;
        loadingStep.textContent = stage.step;
        loadingMessage.textContent = stage.message;

        if (progress === 100) {
            window.clearInterval(loadingTimer);
            finishLoading();
        }
    }, 50);
}

function enterRoom(skipTransition = false) {
    loadingScreen.classList.add("loading-complete");
    loadingSound.pause();

    window.setTimeout(() => {
        loadingScreen.classList.add("hidden");
        showScreen(passwordScreen);
        passwordInput.focus();
    }, skipTransition ? 0 : 800);
}

loadingScreen.addEventListener("pointermove", event => {
    const x = `${event.clientX}px`;
    const y = `${event.clientY}px`;

    loadingScreen.style.setProperty("--mouse-x", x);
    loadingScreen.style.setProperty("--mouse-y", y);
    flashlightCursor.style.transform =
        `translate(${event.clientX}px, ${event.clientY}px)`;
});

enterRoomButton.addEventListener("click", enterRoom);

function showScreen(screenToShow, addToHistory = true) {
    const screens = document.querySelectorAll(".screen");
    const currentScreen = Array.from(screens).find(screen => {
        return !screen.classList.contains("hidden");
    });

    if (
        addToHistory &&
        currentScreen &&
        currentScreen !== screenToShow
    ) {
        screenHistory.push(currentScreen);
    }

    screens.forEach(screen => {
        screen.classList.add("hidden");
    });

    screenToShow.classList.remove("hidden");

    if (screenToShow === moodScreen) {
        document.documentElement.style.setProperty(
            "--active-page-accent",
            "#A64914"
        );
        moodMusic.pause();
    }

    globalBackButton.classList.remove("hidden");
    globalBackButton.classList.toggle(
        "question-back-position",
        screenToShow === questionsScreen ||
        screenToShow === finalQuestionScreen
    );
    globalNextButton.classList.toggle(
        "hidden",
        screenToShow === moodScreen ||
        screenToShow === musicScreen ||
        screenToShow === placeScreen ||
        screenToShow === collectionScreen ||
        screenToShow === visitedPlacesScreen ||
        screenToShow === visitedPlaceDetailScreen
    );
    visitedPlacesButton.classList.toggle(
        "hidden",
        screenToShow !== moodScreen &&
        screenToShow !== musicScreen &&
        screenToShow !== placeScreen &&
        screenToShow !== collectionScreen
    );

    questionVideos.forEach(video => {
        if (screenToShow.contains(video)) {
            video.play().catch(() => {});
        } else {
            video.pause();
        }
    });

    const isQuestionSequence =
        screenToShow === questionsScreen ||
        screenToShow === finalQuestionScreen;

    if (isQuestionSequence) {
        questionsSoundtrack.play().catch(() => {});
    } else {
        questionsSoundtrack.pause();
        questionsSoundtrack.currentTime = 0;
    }
}

function returnToEntryScreen() {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.add("hidden");
    });

    loadingScreen.classList.remove("hidden", "loading-complete");
    loadingScreen.classList.add("loading-ready");
    questionsSoundtrack.pause();
    questionsSoundtrack.currentTime = 0;
    questionsSoundtrack.play().catch(() => {});
    globalBackButton.classList.add("hidden");
    globalBackButton.classList.remove("question-back-position");
    globalNextButton.classList.add("hidden");
    visitedPlacesButton.classList.add("hidden");
    screenHistory.length = 0;
}

function goBack() {
    resetSecurityAlert();
    resetGrantedSequence();

    if (!collectionScreen.classList.contains("hidden")) {
        const moodPageHistoryIndex =
            screenHistory.lastIndexOf(musicScreen);

        if (moodPageHistoryIndex >= 0) {
            screenHistory.splice(moodPageHistoryIndex);
        }

        showScreen(musicScreen, false);
        return;
    }

    const previousScreen = screenHistory.pop();

    if (previousScreen) {
        if (previousScreen === leakScreen) {
            showSecurityAlert({
                addToHistory: false,
                messages: activeSecurityMessages,
                destination: securityDestination
            });
            return;
        }

        if (previousScreen === successScreen) {
            showGrantedSequence(false);
            return;
        }

        showScreen(previousScreen, false);
        return;
    }

    returnToEntryScreen();
}

globalBackButton.addEventListener("click", goBack);

function completeSecurityAlertForTesting() {
    securitySequenceId++;
    securityTimers.forEach(timer => {
        window.clearTimeout(timer);
        window.clearInterval(timer);
    });
    securityTimers = [];

    accessDeniedSound.pause();
    accessDeniedSound.currentTime = 0;
    verificationLoadingSound.pause();
    verificationLoadingSound.currentTime = 0;

    deniedIntro.classList.add("hidden");
    securityTerminal.classList.remove("hidden");
    securityLog.innerHTML = "";

    activeSecurityMessages.forEach(message => {
        const line = document.createElement("p");
        line.className = message.className || "";
        line.textContent = message.text;
        securityLog.append(line);
    });

    securityLoading.classList.remove("hidden");
    securityLoadingProgress.style.width = "100%";
    securityLoadingPercent.textContent = "100%";
    startQuestionsButton.classList.remove("hidden");
}

function goForwardForTesting() {
    if (!loadingScreen.classList.contains("hidden")) {
        enterRoom(true);
        return;
    }

    const currentScreen = Array.from(
        document.querySelectorAll(".screen")
    ).find(screen => !screen.classList.contains("hidden"));

    if (currentScreen === passwordScreen) {
        showSecurityAlert();
        return;
    }

    if (currentScreen === leakScreen) {
        if (startQuestionsButton.classList.contains("hidden")) {
            completeSecurityAlertForTesting();
        } else {
            continueAfterSecurityAlert();
        }
        return;
    }

    if (currentScreen === questionsScreen) {
        if (currentQuestionIndex + 1 < verificationQuestionCount) {
            if (currentQuestionId !== null) {
                answeredQuestionIds.add(currentQuestionId);
            }
            currentQuestionIndex++;
            loadNextQuestion();
        } else {
            showFinalSecurityAlert();
        }
        return;
    }

    if (currentScreen === finalQuestionScreen) {
        showGrantedSequence();
        return;
    }

    if (currentScreen === successScreen) {
        if (continueButton.classList.contains("hidden")) {
            completeGrantedSequenceForTesting();
        } else {
            resetGrantedSequence();
            showScreen(moodScreen);
        }
        return;
    }

    if (currentScreen === moodScreen) {
        musicMood.textContent = "Тестовый режим";
        showScreen(musicScreen);
        startMoodPlaylist(selectedMoodValue);
        return;
    }

    if (currentScreen === musicScreen) {
        showRandomPlace();
        return;
    }

    if (currentScreen === placeScreen) {
        renderCollection();
        showScreen(collectionScreen);
    }
}

globalNextButton.addEventListener("click", goForwardForTesting);

const primarySecurityMessages = [
    {
        text: "⚠ Обнаружена аномалия безопасности",
        className: "security-warning"
    },
    {
        text: "Система зафиксировала совпадение вашего ключа доступа с архивом скомпрометированных данных."
    },
    {
        text: "Основная аутентификация признана недостоверной."
    },
    {
        text: "Запуск протокола вторичной идентификации...",
        className: "security-protocol"
    }
];

const finalSecurityMessages = [
    {
        text: "⚠ Обнаружен второй носитель знаний.",
        className: "security-warning"
    },
    {
        text: "Субъект «Елена» способен воспроизвести ответы на предыдущие контрольные вопросы."
    },
    {
        text: "Для исключения подмены личности инициируется последний этап аутентификации.",
        className: "security-protocol"
    }
];

let activeSecurityMessages = primarySecurityMessages;
let securityDestination = "questions";

function scheduleSecurityAction(callback, delay) {
    const timer = window.setTimeout(callback, delay);
    securityTimers.push(timer);
}

function resetSecurityAlert() {
    securitySequenceId++;
    securityTimers.forEach(timer => {
        window.clearTimeout(timer);
        window.clearInterval(timer);
    });
    securityTimers = [];

    accessDeniedSound.pause();
    accessDeniedSound.currentTime = 0;
    verificationLoadingSound.pause();
    verificationLoadingSound.currentTime = 0;
    deniedIntro.classList.remove("hidden");
    deniedIntro.classList.remove("denied-intro-animate");
    securityTerminal.classList.add("hidden");
    securityLog.innerHTML = "";
    securityLoading.classList.add("hidden");
    securityLoadingProgress.style.width = "0%";
    securityLoadingPercent.textContent = "0%";
    startQuestionsButton.classList.add("hidden");
}

function finishSecurityLoading(sequenceId) {
    let progress = 0;
    securityLoading.classList.remove("hidden");

    const loadingTimer = window.setInterval(() => {
        if (sequenceId !== securitySequenceId) {
            window.clearInterval(loadingTimer);
            return;
        }

        progress = Math.min(progress + 4, 100);
        securityLoadingProgress.style.width = `${progress}%`;
        securityLoadingPercent.textContent = `${progress}%`;

        if (progress === 100) {
            window.clearInterval(loadingTimer);
            verificationLoadingSound.pause();
            verificationLoadingSound.currentTime = 0;
            scheduleSecurityAction(() => {
                startQuestionsButton.classList.remove("hidden");
            }, 300);
        }
    }, 45);

    securityTimers.push(loadingTimer);
}

function typeSecurityMessages(sequenceId, messageIndex = 0) {
    if (
        sequenceId !== securitySequenceId ||
        messageIndex >= activeSecurityMessages.length
    ) {
        if (sequenceId === securitySequenceId) {
            finishSecurityLoading(sequenceId);
        }
        return;
    }

    const message = activeSecurityMessages[messageIndex];
    const line = document.createElement("p");
    line.className = message.className || "";
    securityLog.append(line);

    let characterIndex = 0;

    function typeNextCharacter() {
        if (sequenceId !== securitySequenceId) {
            return;
        }

        line.textContent = message.text.slice(0, characterIndex + 1);
        characterIndex++;

        if (characterIndex < message.text.length) {
            scheduleSecurityAction(typeNextCharacter, 16);
        } else {
            scheduleSecurityAction(() => {
                typeSecurityMessages(sequenceId, messageIndex + 1);
            }, 320);
        }
    }

    typeNextCharacter();
}

function showSecurityAlert({
    addToHistory = true,
    messages = primarySecurityMessages,
    destination = "questions"
} = {}) {
    resetSecurityAlert();
    activeSecurityMessages = messages;
    securityDestination = destination;
    deniedCode.textContent = destination === "final"
        ? "ERROR / SECOND KNOWLEDGE HOLDER"
        : "ERROR / KEY COMPROMISED";
    securityStartButtonLabel.textContent = destination === "final"
        ? "НАЧАТЬ ПОСЛЕДНИЙ ЭТАП АУТЕНТИФИКАЦИИ"
        : "НАЧАТЬ ВТОРИЧНУЮ ИДЕНТИФИКАЦИЮ";

    const sequenceId = securitySequenceId;
    showScreen(leakScreen, addToHistory);
    deniedIntro.classList.add("denied-intro-animate");
    accessDeniedSound.play().catch(() => {});

    scheduleSecurityAction(() => {
        accessDeniedSound.pause();
        accessDeniedSound.currentTime = 0;
        verificationLoadingSound.currentTime = 0;
        verificationLoadingSound.play().catch(() => {});
        deniedIntro.classList.add("hidden");
        securityTerminal.classList.remove("hidden");
        typeSecurityMessages(sequenceId);
    }, 1700);
}

function showFinalSecurityAlert() {
    showSecurityAlert({
        messages: finalSecurityMessages,
        destination: "final"
    });
}

function continueAfterSecurityAlert() {
    if (securityDestination === "final") {
        showFinalQuestion();
        return;
    }

    currentQuestionIndex = 0;
    currentQuestionId = null;
    answeredQuestionIds = new Set();
    showScreen(questionsScreen);
    loadNextQuestion();
}

async function checkPassword() {
    const candidatePassword = passwordInput.value;
    if (!candidatePassword || passwordButton.disabled) {
        return;
    }

    if (!supabaseClient) {
        passwordError.textContent =
            "Система проверки временно недоступна";
        return;
    }

    passwordButton.disabled = true;
    passwordError.textContent = "Проверка ключа...";

    const { data: isCorrect, error } = await supabaseClient.rpc(
        "verify_site_password",
        {
            candidate_password: candidatePassword
        }
    );

    passwordButton.disabled = false;

    if (error) {
        console.error("Ошибка проверки пароля:", error);
        passwordError.textContent =
            "Система проверки временно недоступна";
        passwordInput.focus();
        return;
    }

    if (isCorrect) {
        passwordError.textContent = "";
        passwordInput.value = "";
        showSecurityAlert();
        return;
    }

    passwordError.textContent = "Неверный пароль";
    passwordInput.value = "";
    passwordInput.focus();
}

function prepareQuestionForm() {
    questionNumber.textContent =
        `Вопрос ${currentQuestionIndex + 1} из ${verificationQuestionCount}`;
    answerInput.value = "";
    answerError.textContent = "";
    answerInput.disabled = true;
    answerButton.disabled = true;
}

async function requestRandomQuestion(excludedIds) {
    return supabaseClient.rpc("get_verification_question", {
        excluded_question_ids: excludedIds
    });
}

async function loadNextQuestion(avoidQuestionId = null) {
    prepareQuestionForm();
    questionText.textContent = "Загрузка контрольного вопроса...";

    if (!supabaseClient) {
        answerError.textContent = "Система проверки временно недоступна";
        return;
    }

    const requestId = ++questionRequestId;
    const answeredIds = Array.from(answeredQuestionIds);
    const preferredExcludedIds = avoidQuestionId === null
        ? answeredIds
        : [...answeredIds, avoidQuestionId];
    let response = await requestRandomQuestion(preferredExcludedIds);

    // Пока в пуле только три вопроса, после двух верных ответов
    // альтернативы последнему вопросу может не остаться.
    if (!response.error && !response.data?.length && avoidQuestionId !== null) {
        response = await requestRandomQuestion(answeredIds);
    }

    if (requestId !== questionRequestId) {
        return;
    }

    const question = response.data?.[0];
    if (response.error || !question) {
        console.error("Ошибка загрузки вопроса:", response.error);
        questionText.textContent = "Не удалось загрузить вопрос";
        answerError.textContent = "Проверьте настройку пула в Supabase";
        return;
    }

    currentQuestionId = question.question_id;
    questionText.textContent = question.question_text;
    answerInput.disabled = false;
    answerButton.disabled = false;
    answerInput.focus();
}

async function checkCurrentAnswer() {
    const candidateAnswer = answerInput.value;

    if (!candidateAnswer.trim() || currentQuestionId === null ||
        answerButton.disabled) {
        return;
    }

    answerInput.disabled = true;
    answerButton.disabled = true;
    answerError.textContent = "Проверка...";

    const answeredId = currentQuestionId;
    const { data: isCorrect, error } = await supabaseClient.rpc(
        "verify_verification_answer",
        {
            question_id: answeredId,
            candidate_answer: candidateAnswer
        }
    );

    if (error) {
        console.error("Ошибка проверки ответа:", error);
        answerError.textContent = "Система проверки временно недоступна";
        answerInput.disabled = false;
        answerButton.disabled = false;
        return;
    }

    if (!isCorrect) {
        answerError.textContent = "Неверный ответ. Вопрос заменён.";
        window.setTimeout(() => loadNextQuestion(answeredId), 550);
        return;
    }

    answeredQuestionIds.add(answeredId);

    currentQuestionIndex++;

    if (currentQuestionIndex < verificationQuestionCount) {
        loadNextQuestion();
    } else {
        showFinalSecurityAlert();
    }
}

async function showFinalQuestion() {
    const requestId = ++questionRequestId;
    currentQuestionId = null;
    finalQuestionText.textContent = "Загрузка последнего вопроса...";
    finalAnswerInput.value = "";
    finalAnswerError.textContent = "";
    finalAnswerInput.disabled = true;
    finalAnswerButton.disabled = true;

    showScreen(finalQuestionScreen);

    const { data, error } = await supabaseClient.rpc(
        "get_final_verification_question"
    );
    if (requestId !== questionRequestId) {
        return;
    }

    const question = data?.[0];
    if (error || !question) {
        console.error("Ошибка загрузки последнего вопроса:", error);
        finalQuestionText.textContent = "Не удалось загрузить вопрос";
        finalAnswerError.textContent = "Проверьте настройку пула в Supabase";
        return;
    }

    currentQuestionId = question.question_id;
    finalQuestionText.textContent = question.question_text;
    finalAnswerInput.disabled = false;
    finalAnswerButton.disabled = false;
    finalAnswerInput.focus();
}

async function checkFinalAnswer() {
    const candidateAnswer = finalAnswerInput.value;
    if (!candidateAnswer.trim() || currentQuestionId === null ||
        finalAnswerButton.disabled) {
        return;
    }

    finalAnswerInput.disabled = true;
    finalAnswerButton.disabled = true;
    finalAnswerError.textContent = "Проверка...";

    const { data: isCorrect, error } = await supabaseClient.rpc(
        "verify_verification_answer",
        {
            question_id: currentQuestionId,
            candidate_answer: candidateAnswer
        }
    );

    if (error) {
        console.error("Ошибка проверки последнего ответа:", error);
        finalAnswerError.textContent =
            "Система проверки временно недоступна";
        finalAnswerInput.disabled = false;
        finalAnswerButton.disabled = false;
        return;
    }

    if (!isCorrect) {
        finalAnswerError.textContent = "Неверный ответ";
        finalAnswerInput.disabled = false;
        finalAnswerButton.disabled = false;
        finalAnswerInput.select();
        return;
    }

    finalAnswerError.textContent = "";
    showGrantedSequence();
}

const grantedMessages = [
    "Проверка завершена.",
    "Личность подтверждена.",
    "Все этапы аутентификации успешно пройдены.",
    "Добро пожаловать в систему,\nДенис."
];

function scheduleGrantedAction(callback, delay) {
    const timer = window.setTimeout(callback, delay);
    grantedTimers.push(timer);
}

function resetGrantedSequence() {
    grantedSequenceId++;
    grantedTimers.forEach(timer => window.clearTimeout(timer));
    grantedTimers = [];

    lockOpenSound.pause();
    lockOpenSound.currentTime = 0;
    accessGrantedSound.pause();
    accessGrantedSound.currentTime = 0;
    brokenTvVideo.pause();
    brokenTvVideo.currentTime = 0;
    brokenTvSound.pause();
    brokenTvSound.currentTime = 0;
    gigadenVideo.pause();
    gigadenVideo.currentTime = 0;
    gigadenVideo.onended = null;
    brokenTvVideo.classList.add("hidden");
    gigadenVideo.classList.add("hidden");

    grantedLock.classList.remove("granted-lock-open");
    grantedTitle.classList.remove("granted-title-visible");
    grantedMessage.innerHTML = "";
    continueButton.classList.add("hidden");
}

function typeGrantedMessages(sequenceId, lineIndex = 0) {
    if (
        sequenceId !== grantedSequenceId ||
        lineIndex >= grantedMessages.length
    ) {
        if (sequenceId === grantedSequenceId) {
            scheduleGrantedAction(() => {
                startBrokenTvSequence(sequenceId);
            }, 5000);
        }
        return;
    }

    const line = document.createElement("p");
    grantedMessage.append(line);
    let characterIndex = 0;

    function typeNextCharacter() {
        if (sequenceId !== grantedSequenceId) {
            return;
        }

        line.textContent =
            grantedMessages[lineIndex].slice(0, characterIndex + 1);
        characterIndex++;

        if (characterIndex < grantedMessages[lineIndex].length) {
            scheduleGrantedAction(typeNextCharacter, 28);
        } else {
            scheduleGrantedAction(() => {
                typeGrantedMessages(sequenceId, lineIndex + 1);
            }, 380);
        }
    }

    typeNextCharacter();
}

function startGigadenVideo(sequenceId) {
    if (sequenceId !== grantedSequenceId) {
        return;
    }

    brokenTvVideo.pause();
    brokenTvVideo.currentTime = 0;
    brokenTvSound.pause();
    brokenTvSound.currentTime = 0;
    brokenTvVideo.classList.add("hidden");

    gigadenVideo.classList.remove("hidden");
    gigadenVideo.currentTime = 0;
    gigadenVideo.onended = () => {
        if (sequenceId !== grantedSequenceId) {
            return;
        }

        continueButton.classList.remove("hidden");
    };
    gigadenVideo.play().catch(() => {});
}

function startBrokenTvSequence(sequenceId) {
    if (sequenceId !== grantedSequenceId) {
        return;
    }

    brokenTvVideo.classList.remove("hidden");
    brokenTvVideo.currentTime = 0;
    brokenTvSound.currentTime = 0;
    brokenTvVideo.play().catch(() => {});
    brokenTvSound.play().catch(() => {});

    scheduleGrantedAction(() => {
        startGigadenVideo(sequenceId);
    }, 6000);
}

function showGrantedSequence(addToHistory = true) {
    resetGrantedSequence();
    const sequenceId = grantedSequenceId;
    showScreen(successScreen, addToHistory);

    grantedLock.classList.add("granted-lock-open");
    lockOpenSound.play().catch(() => {});

    scheduleGrantedAction(() => {
        accessGrantedSound.play().catch(() => {});
        grantedTitle.classList.add("granted-title-visible");
    }, 1150);

    scheduleGrantedAction(() => {
        typeGrantedMessages(sequenceId);
    }, 1650);

}

function completeGrantedSequenceForTesting() {
    grantedSequenceId++;
    grantedTimers.forEach(timer => window.clearTimeout(timer));
    grantedTimers = [];
    lockOpenSound.pause();
    accessGrantedSound.pause();
    brokenTvVideo.pause();
    brokenTvSound.pause();
    gigadenVideo.pause();
    brokenTvVideo.classList.add("hidden");
    gigadenVideo.classList.add("hidden");

    grantedLock.classList.add("granted-lock-open");
    grantedTitle.classList.add("granted-title-visible");
    grantedMessage.innerHTML = "";

    grantedMessages.forEach(message => {
        const line = document.createElement("p");
        line.textContent = message;
        grantedMessage.append(line);
    });

    continueButton.classList.remove("hidden");
}

passwordButton.addEventListener("click", checkPassword);

passwordInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        checkPassword();
    }
});

startQuestionsButton.addEventListener("click", () => {
    continueAfterSecurityAlert();
});

answerButton.addEventListener("click", checkCurrentAnswer);

answerInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        checkCurrentAnswer();
    }
});

finalAnswerButton.addEventListener(
    "click",
    checkFinalAnswer
);

finalAnswerInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        checkFinalAnswer();
    }
});

continueButton.addEventListener("click", () => {
    resetGrantedSequence();
    showScreen(moodScreen);
});

questionVideos.forEach(video => {
    video.addEventListener("error", () => {
        video.classList.add("hidden");
    });
});

moodCards.forEach(card => {
    card.addEventListener("click", () => {
        moodCards.forEach(item => item.classList.remove("selected"));
        card.classList.add("selected");
        selectedMoodValue = card.dataset.mood;
        updateMoodSelection();
    });
});

foodChoiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        const choice = button.dataset.foodChoice;

        if (selectedFoodChoices.has(choice)) {
            selectedFoodChoices.delete(choice);
            button.classList.remove("selected");
        } else {
            selectedFoodChoices.add(choice);
            button.classList.add("selected");
        }

        button.querySelector(".food-choice-mark").textContent =
            button.classList.contains("selected") ? "✓" : "+";
        updateMoodSelection();
    });
});

function updateMoodSelection() {
    const foodText = selectedFoodChoices.size
        ? Array.from(selectedFoodChoices).join(" + ")
        : "формат не выбран";

    selectedMood.textContent = selectedMoodValue
        ? `${selectedMoodValue} · ${foodText}`
        : `Настроение не выбрано · ${foodText}`;

    moodReadyButton.disabled =
        !selectedMoodValue || selectedFoodChoices.size === 0;
}

randomMoodButton.addEventListener("click", () => {
    const moodIndex = Math.floor(Math.random() * moodCards.length);

    moodCards.forEach(item => item.classList.remove("selected"));
    moodCards[moodIndex].classList.add("selected");
    selectedMoodValue = moodCards[moodIndex].dataset.mood;

    selectedFoodChoices.clear();
    foodChoiceButtons.forEach(button => {
        button.classList.remove("selected");
        button.querySelector(".food-choice-mark").textContent = "+";
    });

    foodChoiceButtons.forEach(button => {
        button.classList.add("selected");
        selectedFoodChoices.add(button.dataset.foodChoice);
        button.querySelector(".food-choice-mark").textContent = "✓";
    });

    updateMoodSelection();
});

moodReadyButton.addEventListener("click", async () => {
    if (moodReadyButton.disabled) {
        return;
    }

    await eventDataReady;

    const activeTheme = moodPageThemes[selectedMoodValue];

    musicMood.textContent = selectedMoodValue.toUpperCase();
    moodDetailFormat.textContent =
        `ФОРМАТ / ${Array.from(selectedFoodChoices).join(" + ")}`;
    musicScreen.style.setProperty(
        "--mood-detail-image",
        `url("${activeTheme.image}")`
    );
    musicScreen.style.setProperty(
        "--mood-detail-accent",
        activeTheme.color
    );
    document.documentElement.style.setProperty(
        "--active-page-accent",
        activeTheme.color
    );
    musicScreen.style.setProperty(
        "--mood-detail-shade-opacity",
        activeTheme.shadeOpacity ?? 1
    );
    placeScreen.style.setProperty(
        "--mood-detail-image",
        `url("${activeTheme.image}")`
    );
    placeScreen.style.setProperty(
        "--mood-detail-accent",
        activeTheme.color
    );
    placeScreen.style.setProperty(
        "--mood-detail-shade-opacity",
        activeTheme.shadeOpacity ?? 1
    );
    collectionScreen.style.setProperty(
        "--mood-detail-image",
        `url("${activeTheme.image}")`
    );
    collectionScreen.style.setProperty(
        "--mood-detail-accent",
        activeTheme.color
    );
    collectionScreen.style.setProperty(
        "--mood-detail-shade-opacity",
        activeTheme.shadeOpacity ?? 1
    );
    startMoodPlaylist(selectedMoodValue);
    showScreen(musicScreen);
});

function displayPlace(place) {
    placeTitle.textContent = place.title;
    placeDescription.textContent = place.shortDescription;
    placeRating.textContent = place.rating;
    placeType.textContent = place.type || "Место";
    placeCuisine.textContent = place.cuisine
        ? `КУХНЯ / ${place.cuisine}`
        : "";
    placeDuration.textContent = place.duration || "";
    placeFear.textContent = place.fear
        ? `СТРАШНОСТЬ ${"☠".repeat(place.fear)}${"○".repeat(3 - place.fear)}`
        : "";
    placePrice.textContent = place.price || "";
    placeImage.style.backgroundImage = `url("${place.image}")`;
    placeCard.className = `place-card ${place.className}`;
    placeCard.classList.toggle(
        "is-restaurant",
        place.pageType === "restaurant"
    );
    placeCard.setAttribute("aria-expanded", "false");
    placeExpandedContent.classList.add("hidden");
    placeOpenHint.textContent =
        "НАЖМИТЕ, ЧТОБЫ ОТКРЫТЬ ОПИСАНИЕ";

    placeDetails.innerHTML = "";
    const descriptionParts = Array.isArray(place.description)
        ? place.description
        : [place.description];
    descriptionParts.forEach(text => {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        placeDetails.append(paragraph);
    });

    placeRatingBreakdown.innerHTML = "";
    (place.ratings || []).forEach(([label, value]) => {
        const row = document.createElement("div");
        const name = document.createElement("span");
        const score = document.createElement("strong");
        name.textContent = label;
        score.textContent = value;
        row.append(name, score);
        placeRatingBreakdown.append(row);
    });

    placeGallery.innerHTML = "";
    (place.gallery || []).forEach((source, index) => {
        const image = document.createElement("img");
        image.src = source;
        image.alt = `${place.title}, фото ${index + 2}`;
        image.loading = "lazy";
        placeGallery.append(image);
    });

    renderRestaurantContent(place);

    placeComment.classList.toggle("hidden", !place.comment);
    placeCommentText.textContent = place.comment || "";

    placeLinkSection.classList.toggle("hidden", !place.link?.url);
    placeLink.href = place.link?.url || "#";
    placeLink.firstChild.textContent = place.link?.label
        ? `${place.link.label} `
        : "Открыть страницу события ";

    const isVisited = visitedPlaceIndexes.has(currentPlaceIndex);
    visitPlaceButton.classList.toggle("is-visited", isVisited);
    visitPlaceButton.textContent =
        isVisited ? "Посещено ✓" : "Посетить";
}

function renderRestaurantContent(place) {
    restaurantContent.innerHTML = "";
    const blocks = place.restaurantContent || [];
    const isRestaurant = place.pageType === "restaurant";
    restaurantContent.classList.toggle(
        "hidden",
        !isRestaurant || blocks.length === 0
    );

    blocks.forEach(block => {
        if (block.type === "menu") {
            const section = document.createElement("section");
            section.className = "restaurant-menu-block";

            if (block.title) {
                const title = document.createElement("h2");
                title.textContent = block.title;
                section.append(title);
            }

            if (block.description) {
                const description = document.createElement("p");
                description.textContent = block.description;
                section.append(description);
            }

            const images = document.createElement("div");
            images.className = "restaurant-menu-images";
            images.classList.toggle(
                "is-small",
                block.size === "small"
            );
            (block.images || []).forEach((source, index) => {
                if (/\.pdf(?:$|[?#])/i.test(source)) {
                    const pdf = document.createElement("div");
                    pdf.className = "restaurant-menu-pdf";

                    const frame = document.createElement("iframe");
                    frame.src = `${source}#view=FitH`;
                    frame.title = block.title
                        ? `${block.title}, PDF`
                        : "Меню ресторана, PDF";
                    frame.loading = "lazy";

                    const link = document.createElement("a");
                    link.href = source;
                    link.target = "_blank";
                    link.rel = "noopener noreferrer";
                    link.innerHTML =
                        "Открыть меню в новой вкладке " +
                        "<span aria-hidden=\"true\">↗</span>";

                    pdf.append(frame, link);
                    images.append(pdf);
                    return;
                }

                const image = document.createElement("img");
                image.src = source;
                image.alt = block.title
                    ? `${block.title}, страница ${index + 1}`
                    : `Меню, страница ${index + 1}`;
                image.loading = "lazy";
                images.append(image);
            });
            section.append(images);
            restaurantContent.append(section);
            return;
        }

        if (block.type === "item") {
            const item = document.createElement("article");
            item.className = "restaurant-item-block";

            const copy = document.createElement("div");
            const heading = document.createElement("div");
            heading.className = "restaurant-item-heading";

            const title = document.createElement("h2");
            title.textContent = block.title || "Без названия";
            const price = document.createElement("strong");
            price.textContent = block.price || "";
            heading.append(title, price);

            const description = document.createElement("p");
            description.textContent = block.description || "";
            copy.append(heading, description);

            if (block.image) {
                const image = document.createElement("img");
                image.src = block.image;
                image.alt = block.title || "Позиция ресторана";
                image.loading = "lazy";
                item.append(image, copy);
            } else {
                item.classList.add("without-image");
                item.append(copy);
            }

            restaurantContent.append(item);
        }
    });
}

function getAvailablePlaceIndexes() {
    const moodSpecificPlaces = places
        .map((place, index) => ({ place, index }))
        .filter(({ place }) => {
            return place.moods?.includes(selectedMoodValue);
        });

    if (moodSpecificPlaces.length) {
        return moodSpecificPlaces
            .filter(({ place }) => {
                return !place.formats || place.formats.some(format => {
                    return selectedFoodChoices.has(format);
                });
            })
            .map(({ index }) => index);
    }

    return places
        .map((place, index) => ({ place, index }))
        .filter(({ place }) => {
            if (place.moods) {
                return false;
            }

            return !place.formats || place.formats.some(format => {
                return selectedFoodChoices.has(format);
            });
        })
        .map(({ index }) => index);
}

function getSelectablePlaceIndexes() {
    const availableIndexes = getAvailablePlaceIndexes();
    if (includeVisitedToggle.checked) {
        return availableIndexes;
    }

    return availableIndexes.filter(index => {
        return !visitedPlaceIndexes.has(index);
    });
}

function showRandomPlace(animateCard = false) {
    const availableIndexes = getSelectablePlaceIndexes();

    if (!availableIndexes.length) {
        renderCollection();
        showScreen(collectionScreen);
        return;
    }

    let nextIndex;

    do {
        nextIndex = availableIndexes[
            Math.floor(Math.random() * availableIndexes.length)
        ];
    } while (
        availableIndexes.length > 1 &&
        nextIndex === currentPlaceIndex
    );

    currentPlaceIndex = nextIndex;
    const place = places[currentPlaceIndex];

    displayPlace(place);
    showScreen(placeScreen);

    if (animateCard) {
        void placeCard.offsetWidth;
        placeCard.classList.add("place-card-reveal");
    }
}

function revealRandomPlace() {
    if (isRandomPlaceRevealing) {
        return;
    }

    isRandomPlaceRevealing = true;
    randomPlaceButton.disabled = true;
    randomPlaceReveal.classList.remove("hidden");
    randomPlaceReveal.classList.add("is-rolling");

    window.setTimeout(() => {
        showRandomPlace(true);
        randomPlaceReveal.classList.add("hidden");
        randomPlaceReveal.classList.remove("is-rolling");
        randomPlaceButton.disabled = false;
        isRandomPlaceRevealing = false;
    }, 1950);
}

function renderCollection() {
    placesCollection.innerHTML = "";
    const availableIndexes = [...getAvailablePlaceIndexes()].sort(
        (firstIndex, secondIndex) => {
            return parseFloat(places[secondIndex].rating) -
                parseFloat(places[firstIndex].rating);
        }
    );
    collectionEmpty.classList.toggle(
        "hidden",
        availableIndexes.length > 0
    );

    availableIndexes.forEach(index => {
        const place = places[index];
        const card = document.createElement("article");
        card.className = "collection-card";
        const isVisited = visitedPlaceIndexes.has(index);
        card.classList.toggle("is-visited", isVisited);
        card.tabIndex = 0;
        card.setAttribute("role", "button");

        const image = document.createElement("img");
        image.src = place.image;
        image.alt = place.title;

        const content = document.createElement("div");
        content.className = "collection-card-content";

        if (isVisited) {
            const visitedBadge = document.createElement("span");
            visitedBadge.className = "collection-card-visited";
            visitedBadge.textContent = "Посещено";
            content.append(visitedBadge);
        }

        const title = document.createElement("h2");
        title.textContent = place.title;
        const description = document.createElement("p");
        description.textContent = place.shortDescription;
        content.append(title, description);

        const rating = document.createElement("strong");
        rating.textContent = place.rating;

        const openPlace = () => {
            currentPlaceIndex = index;
            displayPlace(place);
            setPlaceExpanded(true);
            showScreen(placeScreen);
            void placeCard.offsetWidth;
            placeCard.classList.add("place-card-reveal");
        };

        card.addEventListener("click", openPlace);
        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openPlace();
            }
        });

        card.append(image, content, rating);
        placesCollection.append(card);
    });
}

const visitedPlacesStorageKey = "denisik-visited-places-v1";
const visitedJournalStorageKey = "denisik-visited-journal-v1";
const visitedMediaDatabaseName = "denisik-visited-media-v1";
const visitedMediaBucket = "visited-media";
let visitedMediaObjectUrls = [];
let visitedMediaItems = [];
let visitedMediaRenderId = 0;
let visitedGalleryIndex = 0;
const impressionSaveTimers = new Map();

function getPlaceTheme(place) {
    const mood = place.moods?.[0] || "Классика";
    return {
        mood,
        ...(moodPageThemes[mood] || moodPageThemes["Классика"])
    };
}

function readVisitedJournal() {
    return visitedJournalCache;
}

async function initializeSupabaseArchive() {
    if (!supabaseClient) {
        console.error("Библиотека Supabase не загрузилась");
        return;
    }

    const {
        data: { session },
        error
    } = await supabaseClient.auth.getSession();

    if (error) {
        console.error("Не удалось проверить сессию Supabase:", error);
        return;
    }

    supabaseSession = session;
    if (supabaseSession) {
        await migrateLocalArchive();
        await restoreVisitedPlaces();
    }

    supabaseClient.auth.onAuthStateChange((_event, nextSession) => {
        supabaseSession = nextSession;
        if (!nextSession) {
            visitedPlaceIndexes.clear();
            visitedJournalCache = {};
        }
    });
}

async function openVisitedArchive() {
    const isAuthenticated = Boolean(supabaseSession);
    visitedAuthPanel.classList.toggle("hidden", isAuthenticated);
    visitedPlacesContainer.classList.toggle(
        "hidden",
        !isAuthenticated
    );

    if (!isAuthenticated) {
        visitedAuthError.textContent = "";
        return;
    }

    await restoreVisitedPlaces();
    renderVisitedPlacesPage();
}

async function restoreVisitedPlaces() {
    if (!supabaseSession) {
        return;
    }

    const { data, error } = await supabaseClient
        .from("visited_places")
        .select(
            "event_id, author_impression, denis_impression, visited_at"
        )
        .order("visited_at", { ascending: true });

    if (error) {
        console.error("Не удалось загрузить архив:", error);
        visitedAuthError.textContent =
            "Архив ещё не настроен. Запустите supabase/setup.sql.";
        return;
    }

    visitedPlaceIndexes.clear();
    visitedJournalCache = {};
    (data || []).forEach(row => {
        const index = places.findIndex(place => {
            return place.id === row.event_id;
        });
        if (index >= 0) {
            visitedPlaceIndexes.add(index);
        }
        visitedJournalCache[row.event_id] = {
            author: row.author_impression || "",
            denis: row.denis_impression || ""
        };
    });
}

async function saveVisitedPlace(index) {
    const place = places[index];
    if (!place || !supabaseSession) {
        return false;
    }

    const { error } = await supabaseClient
        .from("visited_places")
        .upsert(
            {
                event_id: place.id,
                updated_at: new Date().toISOString()
            },
            { onConflict: "event_id" }
        );

    if (error) {
        console.error("Не удалось сохранить посещение:", error);
        return false;
    }

    visitedPlaceIndexes.add(index);
    visitedJournalCache[place.id] ||= {
        author: "",
        denis: ""
    };
    return true;
}

function saveVisitedImpression(owner, value, statusElement) {
    const place = places[currentVisitedPlaceIndex];
    if (!place || !supabaseSession) {
        return;
    }

    visitedJournalCache[place.id] = {
        ...(visitedJournalCache[place.id] || {}),
        [owner]: value
    };

    const timerKey = `${place.id}:${owner}`;
    window.clearTimeout(impressionSaveTimers.get(timerKey));
    impressionSaveTimers.set(
        timerKey,
        window.setTimeout(async () => {
            const column = owner === "author"
                ? "author_impression"
                : "denis_impression";
            const { error } = await supabaseClient
                .from("visited_places")
                .update({
                    [column]: value,
                    updated_at: new Date().toISOString()
                })
                .eq("event_id", place.id);
            if (error) {
                console.error("Не удалось сохранить впечатление:", error);
                statusElement.textContent = "ОШИБКА СИНХРОНИЗАЦИИ";
                return;
            }
            statusElement.textContent = "СОХРАНЕНО В ОБЛАКЕ";
        }, 550)
    );
}

function openLocalVisitedMediaDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(visitedMediaDatabaseName, 1);

        request.onupgradeneeded = () => {
            const database = request.result;
            const store = database.createObjectStore(
                "media",
                {
                    keyPath: "key",
                    autoIncrement: true
                }
            );
            store.createIndex("placeId", "placeId");
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function getAllLocalVisitedMedia() {
    const database = await openLocalVisitedMediaDatabase();
    return new Promise((resolve, reject) => {
        const transaction = database.transaction("media", "readonly");
        const request = transaction.objectStore("media").getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
        transaction.oncomplete = () => database.close();
    });
}

async function clearLocalVisitedMedia() {
    const database = await openLocalVisitedMediaDatabase();
    return new Promise((resolve, reject) => {
        const transaction = database.transaction("media", "readwrite");
        transaction.objectStore("media").clear();
        transaction.oncomplete = () => {
            database.close();
            resolve();
        };
        transaction.onerror = () => reject(transaction.error);
    });
}

function createMediaStoragePath(placeId, fileName) {
    const safeName = fileName
        .normalize("NFKD")
        .replace(/[^a-zA-Z0-9._-]+/g, "-")
        .replace(/^-+|-+$/g, "") || "media";
    return `${placeId}/${crypto.randomUUID()}-${safeName}`;
}

async function getVisitedMedia(placeId) {
    if (!supabaseSession) {
        return [];
    }

    const { data, error } = await supabaseClient
        .from("visited_media")
        .select(
            "id, storage_path, media_type, original_name, created_at"
        )
        .eq("event_id", placeId)
        .order("created_at", { ascending: true });

    if (error) {
        throw error;
    }

    return await Promise.all((data || []).map(async row => {
        const { data: signedData, error: signedError } =
            await supabaseClient.storage
                .from(visitedMediaBucket)
                .createSignedUrl(row.storage_path, 3600);
        if (signedError) {
            throw signedError;
        }
        return {
            key: row.id,
            storagePath: row.storage_path,
            name: row.original_name,
            type: row.media_type,
            source: signedData.signedUrl
        };
    }));
}

async function uploadVisitedMediaFile(placeId, file) {
    if (file.size > 50 * 1024 * 1024) {
        throw new Error(`${file.name}: файл больше 50 МБ`);
    }

    const storagePath = createMediaStoragePath(placeId, file.name);
    const { error: uploadError } = await supabaseClient.storage
        .from(visitedMediaBucket)
        .upload(storagePath, file, {
            contentType: file.type,
            upsert: false
        });
    if (uploadError) {
        throw uploadError;
    }

    const { error: metadataError } = await supabaseClient
        .from("visited_media")
        .insert({
            event_id: placeId,
            storage_path: storagePath,
            media_type: file.type,
            original_name: file.name
        });
    if (metadataError) {
        await supabaseClient.storage
            .from(visitedMediaBucket)
            .remove([storagePath]);
        throw metadataError;
    }
}

async function addVisitedMedia(placeId, files) {
    if (!supabaseSession) {
        throw new Error("Сначала войдите в архив");
    }
    for (const file of files) {
        await uploadVisitedMediaFile(placeId, file);
    }
}

async function deleteVisitedMedia(item) {
    const { error: storageError } = await supabaseClient.storage
        .from(visitedMediaBucket)
        .remove([item.storagePath]);
    if (storageError) {
        throw storageError;
    }

    const { error: metadataError } = await supabaseClient
        .from("visited_media")
        .delete()
        .eq("id", item.key);
    if (metadataError) {
        throw metadataError;
    }
}

async function migrateLocalArchive() {
    if (!supabaseSession) {
        return;
    }

    let localIds = [];
    let localJournal = {};
    try {
        localIds = JSON.parse(
            localStorage.getItem(visitedPlacesStorageKey) || "[]"
        );
        localJournal = JSON.parse(
            localStorage.getItem(visitedJournalStorageKey) || "{}"
        );
    } catch (error) {
        console.warn("Не удалось прочитать локальный архив:", error);
    }

    const eventIds = new Set([
        ...localIds,
        ...Object.keys(localJournal)
    ]);
    for (const eventId of eventIds) {
        const journal = localJournal[eventId] || {};
        const { error } = await supabaseClient
            .from("visited_places")
            .upsert(
                {
                    event_id: eventId,
                    author_impression: journal.author || "",
                    denis_impression: journal.denis || "",
                    updated_at: new Date().toISOString()
                },
                { onConflict: "event_id" }
            );
        if (error) {
            console.warn("Локальный архив пока не перенесён:", error);
            return;
        }
    }

    try {
        const localMedia = await getAllLocalVisitedMedia();
        for (const item of localMedia) {
            await supabaseClient
                .from("visited_places")
                .upsert(
                    { event_id: item.placeId },
                    { onConflict: "event_id" }
                );
            await uploadVisitedMediaFile(item.placeId, item.file);
        }
        if (localMedia.length) {
            await clearLocalVisitedMedia();
        }
    } catch (error) {
        console.warn("Локальные медиа пока не перенесены:", error);
        return;
    }

    localStorage.removeItem(visitedPlacesStorageKey);
    localStorage.removeItem(visitedJournalStorageKey);
}

function clearVisitedMediaObjectUrls() {
    closeVisitedGallery();
    visitedMediaObjectUrls.forEach(url => URL.revokeObjectURL(url));
    visitedMediaObjectUrls = [];
    visitedMediaItems = [];
}

function renderVisitedGalleryItem() {
    const item = visitedMediaItems[visitedGalleryIndex];
    if (!item) {
        closeVisitedGallery();
        return;
    }

    visitedGalleryStage.innerHTML = "";
    const media = item.type.startsWith("video/")
        ? document.createElement("video")
        : document.createElement("img");
    media.src = item.source;

    if (media instanceof HTMLVideoElement) {
        media.controls = true;
        media.autoplay = true;
    } else {
        media.alt = item.name || "Фото с посещения";
    }

    visitedGalleryStage.append(media);
    visitedGalleryCounter.textContent =
        `${visitedGalleryIndex + 1} / ${visitedMediaItems.length}`;
    const hasSeveralItems = visitedMediaItems.length > 1;
    visitedGalleryPrevious.classList.toggle("hidden", !hasSeveralItems);
    visitedGalleryNext.classList.toggle("hidden", !hasSeveralItems);
}

function openVisitedGallery(index) {
    visitedGalleryIndex = index;
    visitedGalleryLightbox.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    renderVisitedGalleryItem();
    visitedGalleryClose.focus();
}

function closeVisitedGallery() {
    if (!visitedGalleryLightbox) {
        return;
    }

    visitedGalleryLightbox.classList.add("hidden");
    visitedGalleryStage.innerHTML = "";
    document.body.style.overflow = "";
}

function stepVisitedGallery(direction) {
    if (!visitedMediaItems.length) {
        return;
    }

    visitedGalleryIndex =
        (visitedGalleryIndex + direction + visitedMediaItems.length) %
        visitedMediaItems.length;
    renderVisitedGalleryItem();
}

async function renderVisitedMedia(placeId) {
    const renderId = ++visitedMediaRenderId;
    clearVisitedMediaObjectUrls();
    visitedMediaGallery.innerHTML = "";
    visitedGallerySection.classList.add("hidden");
    visitedMediaEmpty.textContent =
        "Здесь появятся ваши фото и видео";

    try {
        const mediaItems = await getVisitedMedia(placeId);
        if (renderId !== visitedMediaRenderId) {
            return;
        }

        visitedMediaEmpty.classList.toggle(
            "hidden",
            mediaItems.length > 0
        );
        visitedGallerySection.classList.toggle(
            "hidden",
            mediaItems.length === 0
        );

        mediaItems.forEach(item => {
            const wrapper = document.createElement("div");
            wrapper.className = "visited-media-item";
            const source = item.source;
            const galleryItem = {
                ...item,
                source
            };
            const galleryIndex = visitedMediaItems.push(galleryItem) - 1;

            const media = item.type.startsWith("video/")
                ? document.createElement("video")
                : document.createElement("img");
            media.src = source;

            if (media instanceof HTMLVideoElement) {
                media.preload = "metadata";
            } else {
                media.alt = item.name || "Фото с посещения";
                media.loading = "lazy";
            }

            wrapper.addEventListener("click", () => {
                openVisitedGallery(galleryIndex);
            });

            const remove = document.createElement("button");
            remove.className = "visited-media-remove";
            remove.type = "button";
            remove.setAttribute("aria-label", "Удалить файл");
            remove.textContent = "×";
            remove.addEventListener("click", async event => {
                event.stopPropagation();
                await deleteVisitedMedia(item);
                await renderVisitedMedia(placeId);
            });

            wrapper.append(media, remove);
            visitedMediaGallery.append(wrapper);
        });
    } catch (error) {
        console.error("Не удалось загрузить фото и видео:", error);
        visitedMediaEmpty.classList.remove("hidden");
        visitedGallerySection.classList.add("hidden");
        visitedMediaEmpty.textContent =
            "Не удалось загрузить облачную галерею";
    }
}

function renderVisitedPlaceDetail(index) {
    const place = places[index];
    if (!place) {
        return;
    }

    currentVisitedPlaceIndex = index;
    const theme = getPlaceTheme(place);
    const journal = readVisitedJournal()[place.id] || {};

    visitedPlaceDetailScreen.style.setProperty(
        "--visited-accent",
        theme.color
    );
    visitedPlaceDetailScreen.style.setProperty(
        "--visited-image",
        `url("${theme.image}")`
    );
    document.documentElement.style.setProperty(
        "--active-page-accent",
        theme.color
    );

    visitedDetailImage.src = place.image;
    visitedDetailImage.alt = place.title;
    visitedDetailMood.textContent = theme.mood;
    visitedDetailTitle.textContent = place.title;
    visitedDetailDescription.textContent = place.shortDescription;
    visitedDetailRating.textContent = place.rating;
    authorImpression.value = journal.author || "";
    denisImpression.value = journal.denis || "";
    authorImpressionStatus.textContent = "СОХРАНЕНО В ОБЛАКЕ";
    denisImpressionStatus.textContent = "СОХРАНЕНО В ОБЛАКЕ";

    renderVisitedMedia(place.id);
}

function renderVisitedPlacesPage() {
    visitedPlacesList.innerHTML = "";
    visitedPlacesPlaceholder.classList.toggle(
        "hidden",
        visitedPlaceIndexes.size > 0
    );

    visitedPlaceIndexes.forEach(index => {
        const place = places[index];
        if (!place) {
            return;
        }

        const theme = getPlaceTheme(place);
        const card = document.createElement("article");
        card.className = "visited-place-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.style.setProperty("--visited-accent", theme.color);

        const image = document.createElement("img");
        image.src = place.image;
        image.alt = place.title;
        image.loading = "lazy";

        const content = document.createElement("div");
        content.className = "visited-place-card-content";
        const mood = document.createElement("span");
        mood.className = "visited-place-card-mood";
        mood.textContent = theme.mood;
        const title = document.createElement("h2");
        title.textContent = place.title;
        const description = document.createElement("p");
        description.textContent = place.shortDescription;
        content.append(mood, title, description);

        const rating = document.createElement("strong");
        rating.textContent = place.rating;

        const openJournal = () => {
            renderVisitedPlaceDetail(index);
            showScreen(visitedPlaceDetailScreen);
        };
        card.addEventListener("click", openJournal);
        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openJournal();
            }
        });

        card.append(image, content, rating);
        visitedPlacesList.append(card);
    });
}

function bindImpressionAutosave(
    textarea,
    owner,
    statusElement
) {
    textarea.addEventListener("input", () => {
        statusElement.textContent = "СИНХРОНИЗАЦИЯ...";
        saveVisitedImpression(
            owner,
            textarea.value,
            statusElement
        );
    });
}

bindImpressionAutosave(
    authorImpression,
    "author",
    authorImpressionStatus
);
bindImpressionAutosave(
    denisImpression,
    "denis",
    denisImpressionStatus
);

visitedAuthPanel.addEventListener("submit", async event => {
    event.preventDefault();
    if (!supabaseClient) {
        visitedAuthError.textContent =
            "Не удалось подключить библиотеку Supabase.";
        return;
    }

    visitedAuthSubmit.disabled = true;
    visitedAuthError.textContent = "ПРОВЕРКА ДОСТУПА...";

    const { data, error } =
        await supabaseClient.auth.signInWithPassword({
            email: visitedAuthEmail.value.trim(),
            password: visitedAuthPassword.value
        });

    if (error) {
        visitedAuthError.textContent =
            "Неверный email или пароль общего аккаунта.";
        visitedAuthSubmit.disabled = false;
        return;
    }

    supabaseSession = data.session;
    visitedAuthPassword.value = "";
    await migrateLocalArchive();
    await restoreVisitedPlaces();

    if (pendingVisitedPlaceIndex >= 0) {
        await saveVisitedPlace(pendingVisitedPlaceIndex);
        pendingVisitedPlaceIndex = -1;
    }

    visitedAuthPanel.classList.add("hidden");
    visitedPlacesContainer.classList.remove("hidden");
    renderVisitedPlacesPage();
    visitedAuthSubmit.disabled = false;
});

visitedSignOut.addEventListener("click", async () => {
    await supabaseClient.auth.signOut();
    supabaseSession = null;
    visitedPlaceIndexes.clear();
    visitedJournalCache = {};
    visitedPlacesContainer.classList.add("hidden");
    visitedAuthPanel.classList.remove("hidden");
    visitedAuthError.textContent = "";
});

visitedMediaInput.addEventListener("change", async () => {
    const place = places[currentVisitedPlaceIndex];
    const files = Array.from(visitedMediaInput.files || []).filter(file => {
        return file.type.startsWith("image/") ||
            file.type.startsWith("video/");
    });

    if (!place || !files.length) {
        visitedMediaInput.value = "";
        return;
    }

    visitedMediaEmpty.classList.remove("hidden");
    visitedMediaEmpty.textContent = "СОХРАНЕНИЕ ФАЙЛОВ...";

    try {
        await addVisitedMedia(place.id, files);
        await renderVisitedMedia(place.id);
    } catch (error) {
        console.error("Не удалось сохранить фото и видео:", error);
        visitedMediaEmpty.textContent =
            "Не удалось сохранить выбранные файлы";
    } finally {
        visitedMediaInput.value = "";
    }
});

visitedGalleryClose.addEventListener("click", closeVisitedGallery);
visitedGalleryPrevious.addEventListener("click", () => {
    stepVisitedGallery(-1);
});
visitedGalleryNext.addEventListener("click", () => {
    stepVisitedGallery(1);
});
visitedGalleryLightbox.addEventListener("click", event => {
    if (event.target === visitedGalleryLightbox) {
        closeVisitedGallery();
    }
});

let visitedGalleryTouchStart = 0;
visitedGalleryLightbox.addEventListener("touchstart", event => {
    visitedGalleryTouchStart = event.changedTouches[0]?.clientX || 0;
}, { passive: true });
visitedGalleryLightbox.addEventListener("touchend", event => {
    const touchEnd = event.changedTouches[0]?.clientX || 0;
    const distance = touchEnd - visitedGalleryTouchStart;
    if (Math.abs(distance) > 50) {
        stepVisitedGallery(distance > 0 ? -1 : 1);
    }
}, { passive: true });

document.addEventListener("keydown", event => {
    if (
        event.key === "Escape" &&
        !deleteVisitDialog.classList.contains("hidden")
    ) {
        closeDeleteVisitDialog();
        return;
    }

    if (visitedGalleryLightbox.classList.contains("hidden")) {
        return;
    }

    if (event.key === "Escape") {
        closeVisitedGallery();
    } else if (event.key === "ArrowLeft") {
        stepVisitedGallery(-1);
    } else if (event.key === "ArrowRight") {
        stepVisitedGallery(1);
    }
});

randomPlaceButton.addEventListener("click", () => {
    revealRandomPlace();
});

bestRatedPlaceButton.addEventListener("click", () => {
    const availableIndexes = getSelectablePlaceIndexes();

    if (!availableIndexes.length) {
        renderCollection();
        showScreen(collectionScreen);
        return;
    }

    currentPlaceIndex = availableIndexes.reduce(
        (bestIndex, index) => {
            return parseFloat(places[index].rating) >
                parseFloat(places[bestIndex].rating)
                ? index
                : bestIndex;
        },
        availableIndexes[0]
    );
    const place = places[currentPlaceIndex];

    displayPlace(place);
    showScreen(placeScreen);
    void placeCard.offsetWidth;
    placeCard.classList.add("place-card-reveal");
});

function togglePlaceDetails() {
    const isExpanded =
        placeCard.getAttribute("aria-expanded") === "true";
    setPlaceExpanded(!isExpanded);
}

function setPlaceExpanded(isExpanded) {
    placeCard.setAttribute("aria-expanded", String(isExpanded));
    placeCard.classList.toggle("is-expanded", isExpanded);
    placeExpandedContent.classList.toggle("hidden", !isExpanded);
    placeOpenHint.textContent = isExpanded
        ? "НАЖМИТЕ, ЧТОБЫ СКРЫТЬ ОПИСАНИЕ"
        : "НАЖМИТЕ, ЧТОБЫ ОТКРЫТЬ ОПИСАНИЕ";
}

placeCard.addEventListener("click", event => {
    if (
        placeCard.classList.contains("is-expanded") &&
        event.target.closest(".place-expanded-content")
    ) {
        return;
    }

    togglePlaceDetails();
});
placeCard.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        togglePlaceDetails();
    }
});

collapsePlaceButton.addEventListener("click", event => {
    event.stopPropagation();
    setPlaceExpanded(false);
    placeCard.scrollIntoView({ behavior: "smooth", block: "start" });
});

function openDeleteVisitDialog() {
    const place = places[currentPlaceIndex];
    if (!place) {
        return;
    }

    const theme = getPlaceTheme(place);
    deleteVisitDialog.style.setProperty(
        "--mood-detail-accent",
        theme.color
    );
    deleteVisitStatus.textContent = "";
    deleteVisitDialog.classList.remove("hidden");
    confirmDeleteVisit.focus();
}

function closeDeleteVisitDialog() {
    if (confirmDeleteVisit.disabled) {
        return;
    }
    deleteVisitDialog.classList.add("hidden");
    deleteVisitStatus.textContent = "";
}

async function deleteCurrentVisit() {
    const place = places[currentPlaceIndex];
    if (!place || !supabaseSession) {
        return;
    }

    confirmDeleteVisit.disabled = true;
    cancelDeleteVisit.disabled = true;
    deleteVisitStatus.textContent = "УДАЛЕНИЕ ДАННЫХ...";

    try {
        const { data: mediaRows, error: mediaError } =
            await supabaseClient
                .from("visited_media")
                .select("storage_path")
                .eq("event_id", place.id);
        if (mediaError) {
            throw mediaError;
        }

        const storagePaths = (mediaRows || []).map(row => {
            return row.storage_path;
        });
        if (storagePaths.length) {
            const { error: storageError } =
                await supabaseClient.storage
                    .from(visitedMediaBucket)
                    .remove(storagePaths);
            if (storageError) {
                throw storageError;
            }
        }

        const { error: visitError } = await supabaseClient
            .from("visited_places")
            .delete()
            .eq("event_id", place.id);
        if (visitError) {
            throw visitError;
        }

        visitedPlaceIndexes.delete(currentPlaceIndex);
        delete visitedJournalCache[place.id];
        clearVisitedMediaObjectUrls();
        visitPlaceButton.classList.remove("is-visited");
        visitPlaceButton.textContent = "Посетить";
        deleteVisitDialog.classList.add("hidden");
    } catch (error) {
        console.error("Не удалось удалить посещение:", error);
        deleteVisitStatus.textContent =
            "НЕ УДАЛОСЬ УДАЛИТЬ ДАННЫЕ. ПОПРОБУЙТЕ ЕЩЁ РАЗ.";
    } finally {
        confirmDeleteVisit.disabled = false;
        cancelDeleteVisit.disabled = false;
    }
}

cancelDeleteVisit.addEventListener("click", closeDeleteVisitDialog);
confirmDeleteVisit.addEventListener("click", deleteCurrentVisit);
deleteVisitDialog.addEventListener("click", event => {
    if (event.target === deleteVisitDialog) {
        closeDeleteVisitDialog();
    }
});

visitPlaceButton.addEventListener("click", async () => {
    if (currentPlaceIndex < 0) {
        return;
    }

    if (visitedPlaceIndexes.has(currentPlaceIndex)) {
        openDeleteVisitDialog();
        return;
    }

    if (!supabaseSession) {
        pendingVisitedPlaceIndex = currentPlaceIndex;
        showScreen(visitedPlacesScreen);
        await openVisitedArchive();
        return;
    }

    const isSaved = await saveVisitedPlace(currentPlaceIndex);
    if (!isSaved) {
        visitPlaceButton.textContent = "Ошибка сохранения";
        return;
    }

    visitPlaceButton.classList.add("is-visited");
    visitPlaceButton.textContent = "Посещено ✓";
});

moodListButton.addEventListener("click", () => {
    renderCollection();
    showScreen(collectionScreen);
});

rerollPlaceButton.addEventListener("click", () => {
    showRandomPlace(true);
});

openCollectionButton.addEventListener("click", () => {
    renderCollection();
    showScreen(collectionScreen);
});

backToPlaceButton.addEventListener("click", () => {
    const moodPageHistoryIndex =
        screenHistory.lastIndexOf(musicScreen);

    if (moodPageHistoryIndex >= 0) {
        screenHistory.splice(moodPageHistoryIndex);
    }

    showScreen(musicScreen, false);
});

// Сразу пробуем запустить музыку. Если браузер блокирует звук до
// взаимодействия со страницей, первое нажатие запускает её автоматически.
startSiteMusic();
startFirstScreenSoundtrack();
document.addEventListener("pointerdown", startSiteMusic, { once: true });
document.addEventListener("keydown", startSiteMusic, { once: true });
document.addEventListener(
    "pointerdown",
    startFirstScreenSoundtrack,
    { once: true }
);
document.addEventListener(
    "keydown",
    startFirstScreenSoundtrack,
    { once: true }
);
startLoadingSequence();
