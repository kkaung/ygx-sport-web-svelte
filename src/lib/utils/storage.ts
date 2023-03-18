type Item = { disabled_cookie: 'disabled_cookie' };

export class Storage {
    get<T>(name: keyof Item): T | null {
        const item = localStorage.getItem(name);

        if (!item) {
            console.error('No ' + name + 'in local storage');
            return null;
        }

        return JSON.parse(item);
    }
    set<T>(name: keyof Item, item: T) {
        localStorage.setItem(name, JSON.stringify(item));
    }
}
