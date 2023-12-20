// services/storage.js

export const saveChild = (child) => {
  const existingChildren = JSON.parse(localStorage.getItem('children')) || [];
  const updatedChildren = [...existingChildren, child];
  localStorage.setItem('children', JSON.stringify(updatedChildren));
};

export const getChildren = () => {
  const children = JSON.parse(localStorage.getItem('children')) || [];
  return children;
};
