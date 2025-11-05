function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry(
  {
    name: 'John',
  },
  {
    name: 'Ann',
  }
);

// console.log(family);
/*
{
  father: <ref *1> {
    name: 'John',
    wife: { name: 'Ann', husband: [Circular *1] }
  },
  mother: <ref *2> {
    name: 'Ann',
    husband: <ref *1> { name: 'John', wife: [Circular *2] }
  }
}
  */

delete family.father;
delete family.mother.husband;
console.log(family);

family = null;
ßconsole.log(family); //nothing to print, the object doesn't reachable
