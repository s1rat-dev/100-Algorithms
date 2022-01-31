const fermactor = (num) =>
{
   for(let i = 1; i < num ; i++)
   {
       for(let j = 1; j < i; j++)
       {
           const total = Math.pow(i,2) - Math.pow(j,2)
           if (total === num)
               return [i,j]
       }
   }

}


console.log(fermactor(31))
