export const loadCities = () => {
  try {
    const cities = JSON.parse(localStorage.getItem('cities'));
    return null !== cities ? cities : [];
  } catch {
    return [];
  }
};

export const saveCities = cities => {
  try {
    localStorage.setItem('cities', JSON.stringify(cities));
  } catch {
  }
};