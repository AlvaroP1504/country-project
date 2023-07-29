
export interface ICountryStore {
    isDialogOpen: boolean;
    continentsParams: string[];
    isSidebarOpen: boolean;
}

function state(): ICountryStore {
    return {
        isDialogOpen: false,
        continentsParams: [],
        isSidebarOpen: false
    }
}

export default state;