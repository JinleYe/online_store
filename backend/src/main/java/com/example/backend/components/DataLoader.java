package com.example.backend.components;

import com.example.backend.models.*;
import com.example.backend.derivedQueryTests.*;
import com.example.backend.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
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

    @Autowired
    private UserRepository userRepository;


    @Override
    public void run(ApplicationArguments args) throws Exception {

        // ADD PRODUCTS
        String fakeDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
        Product product1 = new Product("Acer Nitro 5", 699.99, fakeDescription, "img", 5, Category.LAPTOP);
        Product product2 = new Product("Alienware 5 M15 R7", 1699.00, fakeDescription, "img", 5, Category.LAPTOP);
        Product product3 = new Product("HP Omen", 1599.99, fakeDescription, "img", 5, Category.LAPTOP);
        Product product4 = new Product("MSI Creator Z16", 999.00, fakeDescription, "img", 5, Category.LAPTOP);

        Product product5 = new Product("LOGITECH G502 HERO", 39.99, fakeDescription, "img", 5, Category.GAMINGMOUSE);
        Product product6 = new Product("Razer DeathAdder V2", 52.99, fakeDescription, "img", 5, Category.GAMINGMOUSE);
        Product product7 = new Product("Corsair Harpoon RGB Pro", 19.99, fakeDescription, "img", 5, Category.GAMINGMOUSE);
        Product product8 = new Product("SteelSeries Aerox 5 RGB ", 30.99, fakeDescription, "img", 5, Category.GAMINGMOUSE);

        Product product9 = new Product("Nintendo Switch Pro", 309.99, fakeDescription, "img", 5, Category.GAMINGCONSOLE);
        Product product10 = new Product("MICROSOFT XBOX SERIES S", 249.00, fakeDescription, "img", 5, Category.GAMINGCONSOLE);
        Product product11 = new Product("SONY PLAYSTATION 5 825 GB", 449.00, fakeDescription, "img", 5, Category.GAMINGCONSOLE);
        Product product12 = new Product("MICROSOFT XBOX SERIES X", 449.00, fakeDescription, "img", 5, Category.GAMINGCONSOLE);

        Product product13 = new Product("Razer Cynosa V2 Chroma", 49.99, fakeDescription, "img", 5, Category.GAMINGKEYBOARD);
        Product product14 = new Product("SteelSeries APEX PRO TKL", 149.99, fakeDescription, "img", 5, Category.GAMINGKEYBOARD);
        Product product15 = new Product("Corsair K70 RBK MK2", 119.00, fakeDescription, "img", 5, Category.GAMINGKEYBOARD);
        Product product16 = new Product("Logitech G213 Prodigy", 38.00, fakeDescription, "img", 5, Category.GAMINGKEYBOARD);

        Product product17 = new Product("Sony Playstation 5", 49.99, fakeDescription, "img", 5, Category.GAMINGCONTROLLER);
        Product product18 = new Product("Nintendo Switch Pro", 64.99, fakeDescription, "img", 5, Category.GAMINGCONTROLLER);
        Product product19 = new Product("Microsoft Xbox Elite Series 2", 143.00, fakeDescription, "img", 5, Category.GAMINGCONTROLLER);
        Product product20 = new Product("Microsoft Xbox Series S Wireless", 59.99, fakeDescription, "img", 5, Category.GAMINGCONTROLLER);

        Product product21 = new Product("Razer Kraken X", 31.00, fakeDescription, "img", 5, Category.GAMINGHEADSET);
        Product product22 = new Product("Nintendo Switch Pro", 64.99, fakeDescription, "img", 5, Category.GAMINGHEADSET);
        Product product23 = new Product("Logitech G332", 29.99, fakeDescription, "img", 5, Category.GAMINGHEADSET);
        Product product24 = new Product("Astro A50 Wireless 7.1", 229.00, fakeDescription, "img", 5, Category.GAMINGHEADSET);

        Product product25 = new Product("Corsair T100 Rank", 149.00, fakeDescription, "img", 5, Category.GAMINGCHAIR);
        Product product26 = new Product("Razer Tarok PRO", 219.00, fakeDescription, "img", 5, Category.GAMINGCHAIR);
        Product product27 = new Product("ADX Firebase Entry", 119.00, fakeDescription, "img", 5, Category.GAMINGCHAIR);
        Product product28 = new Product("NOBLECHAIRS Hero TX", 219.00, fakeDescription, "img", 5, Category.GAMINGCHAIR);
        productRepository.saveAll(Arrays.asList(product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11,
                product12, product13, product14, product15, product16, product17, product18, product19, product20, product21, product22, product23, product24,
                product25, product26, product27, product28));

        // ADD USERS
        User SarahJane = new User("Sarah123", "Cakebakefake!340", "SarahJane123@gmail.com");
        User Bailey = new User("Bailey_B", "ajdogenwof.34/", "Bailey.Buntin@gmail.com");
        User Craig = new User("CAllen2", "hghghghj786@@0", "Craig_Allen@yahoo.com");
        User Mark = new User("Mark_Dupree", "MD@66.54321", "Mark_Dupree@icloud.com");
        User Ashley = new User("Ashley_A", "Admin_123_jv", "Ashley_A@hotmail.co.uk");
        userRepository.saveAll(Arrays.asList(SarahJane, Bailey, Craig, Mark, Ashley));

        // ADD CUSTOMERS
        Customer customer1 = new Customer(SarahJane, "Sarah Jane", "123 Summer Avenue, London");
        Customer customer2 = new Customer(Bailey, "Bailey Buntin", "88 Griffen Avenue, Birmingham");
        Customer customer3 = new Customer(Craig, "Craig Allen", "9 Green Lane, Glasgow");
        customerRepository.saveAll(Arrays.asList(customer1, customer2, customer3));

        // ADD ADMINS
        Admin admin1 = new Admin(Mark, 1);
        Admin admin2 = new Admin(Ashley, 2);
        adminRepository.saveAll(Arrays.asList(admin1, admin2));

        // ADD REVIEWS
        Review review1 = new Review("Gift For My Son", 5, fakeDescription, true, LocalDate.of(2022, 6, 8), product1, customer1);
        Review review2 = new Review("Sleek Gaming Mouse", 3, fakeDescription, false, LocalDate.of(2022, 5,10), product12, customer1);
        Review review3 = new Review("Comfy Gaming Chair", 4.5, fakeDescription, true, LocalDate.of(2022, 2,2), product25, customer2);
        Review review4 = new Review("New Nintendo Switch Pro", 5, fakeDescription, true, LocalDate.of(2022, 1,1), product9, customer3);
        Review review5 = new Review("Birthday present for my son", 4, fakeDescription, true, LocalDate.of(2022, 1,4), product17, customer2);
        Review review6 = new Review("New Headset", 2.5, fakeDescription, false, LocalDate.of(2022, 4,4), product21, customer3);
        reviewRepository.saveAll(Arrays.asList(review1, review2, review3, review4, review5, review6));

        // ADD ORDERS
        Order order1 = new Order(LocalDate.of(2022, 6, 28), Arrays.asList(product1, product14), customer1);
        Order order2 = new Order(LocalDate.of(2022, 5, 5), Arrays.asList(product1, product14), customer3);
        Order order3 = new Order(LocalDate.of(2022, 3, 26), Arrays.asList(product1, product14), customer2);
        Order order4 = new Order(LocalDate.of(2022, 1, 28), Arrays.asList(product1, product14), customer2);
        Order order5 = new Order(LocalDate.of(2022, 2, 12), Arrays.asList(product1, product14), customer1);
        orderRepository.saveAll(Arrays.asList(order1, order2, order3, order4, order5));
    }

}
