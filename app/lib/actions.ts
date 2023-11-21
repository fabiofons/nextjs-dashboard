"use server";

export const createInvoice = async (formData: FormData) => {
  const rawFormData = {
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  };
  const rawForm = Object.fromEntries(formData.entries());
  console.log(rawFormData);
};
