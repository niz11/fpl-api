"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var ElementStatus;
(function (ElementStatus) {
    ElementStatus["AVAILABLE"] = "a";
    ElementStatus["UNAVAILABLE"] = "u";
    ElementStatus["INJURED"] = "i";
    ElementStatus["SUSPENDED"] = "s";
    ElementStatus["NOT_PLAYING"] = "n";
    ElementStatus["DEPARTED"] = "d";
})(ElementStatus = exports.ElementStatus || (exports.ElementStatus = {}));
var EventStatusDayPoints;
(function (EventStatusDayPoints) {
    EventStatusDayPoints["LIVE"] = "l";
    EventStatusDayPoints["PROVISIONAL"] = "p";
    EventStatusDayPoints["CONFIRMED"] = "r";
})(EventStatusDayPoints = exports.EventStatusDayPoints || (exports.EventStatusDayPoints = {}));
class IsUpdatingError extends Error {
    constructor() {
        super('https://fantasy.premierleague.com is updating');
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.IsUpdatingError = IsUpdatingError;
function fetchWithGuards(info, init) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(info, init);
            if (response.status === 503) {
                throw new IsUpdatingError();
            }
            else if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response;
        }
        catch (error) {
            throw error;
        }
    });
}
function fetchBootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetchWithGuards('https://fantasy.premierleague.com/api/bootstrap-static/');
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchBootstrap = fetchBootstrap;
function fetchElementSummary(elementId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetchWithGuards(`https://fantasy.premierleague.com/api/element-summary/${elementId}/`);
            const data = yield response.json();
            data.id = elementId;
            return data;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchElementSummary = fetchElementSummary;
function fetchEntryEvent(entryId, eventId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetchWithGuards(`https://fantasy.premierleague.com/api/entry/${entryId}/event/${eventId}/picks/`);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchEntryEvent = fetchEntryEvent;
function fetchEventStatus() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetchWithGuards('https://fantasy.premierleague.com/api/event-status');
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchEventStatus = fetchEventStatus;
function fetchFixtures(eventId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let uri = 'https://fantasy.premierleague.com/api/fixtures/';
            let response;
            if (eventId !== undefined) {
                uri = `https://fantasy.premierleague.com/api/fixtures?event=${eventId}`;
            }
            response = yield fetchWithGuards(uri);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchFixtures = fetchFixtures;
function fetchLive(eventId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetchWithGuards(`https://fantasy.premierleague.com/api/event/${eventId}/live/`);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchLive = fetchLive;
function addToWatchList(elementCode) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetchWithGuards(`https://fantasy.premierleague.com/api/watchlist/${elementCode}/`, {
            method: 'POST',
        });
        return response.status === 201;
    });
}
exports.addToWatchList = addToWatchList;
function removeFromWatchList(elementCode) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetchWithGuards(`https://fantasy.premierleague.com/api/watchlist/${elementCode}/`, {
            method: 'DELETE',
        });
        return response.status === 204;
    });
}
exports.removeFromWatchList = removeFromWatchList;
function fetchClassicLeague(leagueId, { pageStandings, pageNewEntries, phase } = {
    pageStandings: 1,
    pageNewEntries: 1,
    phase: 1,
}) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetchWithGuards(`https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/?page_new_entries=${pageNewEntries}&page_standings=${pageStandings}&phase=${phase}`);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchClassicLeague = fetchClassicLeague;
function fetchEntryHistory(entryId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetchWithGuards(`https://fantasy.premierleague.com/api/entry/${entryId}/history/`);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchEntryHistory = fetchEntryHistory;
function fetchCurrentUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetchWithGuards('https://fantasy.premierleague.com/api/me/');
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchCurrentUser = fetchCurrentUser;
function fetchMyTeam(entryId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetchWithGuards(`https://fantasy.premierleague.com/api/my-team/${entryId}/`);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchMyTeam = fetchMyTeam;
//# sourceMappingURL=index.js.map