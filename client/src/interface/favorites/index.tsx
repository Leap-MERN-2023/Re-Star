export interface IFavoritesContext {
  favorites: string[];
  addFavorite: (orgId: string) => void;
  deleteFavorite: (orgId: string) => void;
}
