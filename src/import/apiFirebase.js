import slugify from "slugify";
import { db } from "../Config/Config";
import firebase from "firebase";
import { toast } from "react-toastify";
import { dataProducts } from "../data/data";
import { dbName } from "./dbName";

// import { AddProducts } from "./../Components/AddProducts";

export const updateProduct = (productId, updatedData) => {
  db.collection("Products")
    .doc(productId)
    .update(updatedData)
    .then(() => {
      alert("Product updated successfully");
    })
    .catch((err) => {
      alert("Error updating product:", err);
    });
};

export const deleteProduct = (productId) => {
  db.collection(dbName.products)
    .doc(productId)
    .delete()
    .then(() => {
      alert("Product deleted successfully");
    })
    .catch((err) => {
      alert("Error deleting product:", err);
    });
};

export const getAllProducts = () => {
  db.collection("Products")
    .get()
    .then((querySnapshot) => {
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push({
          ProductID: doc.id,
          ProductName: doc.data().ProductName,
          ProductPrice: doc.data().ProductPrice,
          ProductImg: doc.data().ProductImg,
        });
      });
      this.setState({ products });
    })
    .catch((error) => {
      console.error("Error getting products: ", error);
    });
};

// Brands
export const addBrand = (title) => {
  const slug = slugify(title, { lower: true });
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  const brand = {
    title,
    slug,
    createdAt: timestamp,
    updatedAt: timestamp,
  };

  db.collection("Brands")
    .add(brand)
    .then((docRef) => {
      console.log("Brand added with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding brand: ", error);
    });
};

// Xóa brand dựa trên ID
export const deleteBrand = (brandId) => {
  db.collection("Brands")
    .doc(brandId)
    .delete()
    .then(() => {
      toast("Brand deleted successfully");
    })
    .catch((error) => {
      toast("Error deleting brand error");
    });
};

// Cập nhật brand dựa trên ID và thông tin cập nhật
export const updateBrand = (brandId, updatedData) => {
  db.collection("Brands")
    .doc(brandId)
    .update(updatedData)
    .then(() => {
      toast("Brand updated successfully");
    })
    .catch((error) => {
      toast("Error updating brand: ", error);
    });
};

export const getCategories = () => {
  db.collection(dbName.categories)
    .get()
    .then((querySnapshot) => {
      const categories = [];
      querySnapshot.forEach((doc) => {
        categories.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      toast("Categories:", categories);
      return categories;
    })
    .catch((error) => {
      toast("Error getting categories: ", error);
    });
};

export const getBlogs = () => {
  db.collection(dbName.blogs)
    .get()
    .then((querySnapshot) => {
      const blogs = [];
      querySnapshot.forEach((doc) => {
        blogs.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      toast("Brands:", blogs);
      return blogs;
    })
    .catch((error) => {
      toast("Error getting brands: ", error);
    });
};

export const getBrands = () => {
  db.collection("Brands")
    .get()
    .then((querySnapshot) => {
      const brands = [];
      querySnapshot.forEach((doc) => {
        brands.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      toast("Brands:", brands);
      return brands;
    })
    .catch((error) => {
      toast("Error getting brands: ", error);
    });
};

export const getBrandById = (brandId) => {
  db.collection("Brands")
    .doc(brandId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const brandData = doc.data();
        toast("Brand ne:", brandData);
      } else {
        toast("No brand found with the given ID");
      }
    })
    .catch((error) => {
      toast("Error getting brand by ID: ", error);
    });
};

// Addd data mongodb

/**Users */
export const addUsers = (data) => {
  db.collection(dbName.users)
    .add(data)
    .then((docRef) => {
      toast.success("User added successfully");
    })
    .catch((error) => {
      toast.error("Error adding user error ");
    });
};

export const deleteUser = (id) => {
  db.collection(dbName.users)
    .doc(id)
    .delete()
    .then(() => {
      toast("User deleted successfully");
    })
    .catch((error) => {
      toast("Error deleting user error");
    });
};

// delete
export const deleteSl = (id, dbName) => {
  db.collection(dbName)
    .doc(id)
    .delete()
    .then((result) => {
      toast("Deleted successfully");
    })
    .catch((err) => {
      toast("Delete failed");
    });
};
