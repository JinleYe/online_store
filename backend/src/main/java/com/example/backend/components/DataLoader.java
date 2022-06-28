package com.example.backend.components;

import com.example.backend.models.Category;
import com.example.backend.models.Product;
import com.example.backend.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;


@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private OrderRepository orderRepository;


    @Override
    public void run(ApplicationArguments args) throws Exception {

        // ADD PRODUCTS
        String fakeDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        Product product1 = new Product("Acer Nitro 5", 699.99, fakeDescription, "img", 5, 5, Category.LAPTOP);
        Product product2 = new Product("Alienware 5 M15 R7", 1699.00, fakeDescription, "img", 5, 5, Category.LAPTOP);
        Product product3 = new Product("HP Omen", 1599.99, fakeDescription, "img", 5, 5, Category.LAPTOP);
        Product product4 = new Product("MSI Creator Z16", 999.00, fakeDescription, "img", 5, 5, Category.LAPTOP);

        Product product5 = new Product("LOGITECH G502 HERO", 39.99, fakeDescription, "img", 5, 5, Category.GAMINGMOUSE);
        Product product6 = new Product("Razer DeathAdder V2", 52.99, fakeDescription, "img", 5, 5, Category.GAMINGMOUSE);
        Product product7 = new Product("Corsair Harpoon RGB Pro", 19.99, fakeDescription, "img", 5, 5, Category.GAMINGMOUSE);
        Product product8 = new Product("SteelSeries Aerox 5 RGB ", 30.99, fakeDescription, "img", 5, 5, Category.GAMINGMOUSE);

        Product product9 = new Product("Nintendo Switch Pro", 309.99, fakeDescription, "img", 5, 5, Category.GAMINGCONSOLE);
        Product product10 = new Product("MICROSOFT XBOX SERIES S", 249.00, fakeDescription, "img", 5, 5, Category.GAMINGCONSOLE);
        Product product11 = new Product("SONY PLAYSTATION 5 825 GB", 449.00, fakeDescription, "img", 5, 5, Category.GAMINGCONSOLE);
        Product product12 = new Product("MICROSOFT XBOX SERIES X", 449.00, fakeDescription, "img", 5, 5, Category.GAMINGCONSOLE);

        Product product13 = new Product("Razer Cynosa V2 Chroma", 49.99, fakeDescription, "img", 5, 5, Category.GAMINGKEYBOARD);
        Product product14 = new Product("SteelSeries APEX PRO TKL", 149.99, fakeDescription, "img", 5, 5, Category.GAMINGKEYBOARD);
        Product product15 = new Product("Corsair K70 RBK MK2", 119.00, fakeDescription, "img", 5, 5, Category.GAMINGKEYBOARD);
        Product product16 = new Product("Logitech G213 Prodigy", 38.00, fakeDescription, "img", 5, 5, Category.GAMINGKEYBOARD);

        Product product17 = new Product("Sony Playstation 5", 49.99, fakeDescription, "img", 5, 5, Category.GAMINGCONTROLLER);
        Product product18 = new Product("Nintendo Switch Pro", 64.99, fakeDescription, "img", 5, 5, Category.GAMINGCONTROLLER);
        Product product19 = new Product("Microsoft Xbox Elite Series 2", 143.00, fakeDescription, "img", 5, 5, Category.GAMINGCONTROLLER);
        Product product20 = new Product("Microsoft Xbox Series S Wireless", 59.99, fakeDescription, "img", 5, 5, Category.GAMINGCONTROLLER);

        Product product21 = new Product("Razer Kraken X", 31.00, fakeDescription, "img", 5, 5, Category.GAMINGHEADSET);
        Product product22 = new Product("Nintendo Switch Pro", 64.99, fakeDescription, "img", 5, 5, Category.GAMINGHEADSET);
        Product product23 = new Product("Logitech G332", 29.99, fakeDescription, "img", 5, 5, Category.GAMINGHEADSET);
        Product product24 = new Product("Astro A50 Wireless 7.1", 229.00, fakeDescription, "img", 5, 5, Category.GAMINGHEADSET);

        Product product25 = new Product("Corsair T100 Rank", 149.00, fakeDescription, "img", 5, 5, Category.GAMINGCHAIR);
        Product product26 = new Product("Razer Tarok PRO", 219.00, fakeDescription, "img", 5, 5, Category.GAMINGCHAIR);
        Product product27 = new Product("ADX Firebase Entry", 119.00, fakeDescription, "img", 5, 5, Category.GAMINGCHAIR);
        Product product28 = new Product("NOBLECHAIRS Hero TX", 219.00, fakeDescription, "img", 5, 5, Category.GAMINGCHAIR);

        productRepository.saveAll(Arrays.asList(product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11,
                product12, product13, product14, product15, product16, product17, product18, product19, product20, product21, product22, product23, product24, product25, product26, product27, product28));
    }

}
