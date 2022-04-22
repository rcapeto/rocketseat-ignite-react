export interface EmptyField {
   key: string;
};

export const useForm = () => {
   const checkEmptyFields = (data: Record<string, string>, ...fieldsDontVerify: string[] ) => {
      let hasEmptyField = false;
      const emptyFields: EmptyField[] = [];

      for(const key in data) {
         const value = data[key];

         if(fieldsDontVerify.includes(key)) continue;

         if(!value) {
            hasEmptyField = true;
            emptyFields.push({ key });
         }
      }

      return {
         hasEmptyField,
         emptyFields,
         fields: data
      }
   };

   return {
      checkEmptyFields
   }
};