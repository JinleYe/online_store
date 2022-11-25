package com.example.backend.components;

import com.example.backend.models.*;
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
        Product product1 = new Product("Acer Nitro 5", 699.99, "Enjoy a cutting-edge performance with the Acer Nitro 5 15.6\" Gaming Laptop. It features a 11th gen Core™ i5 processor and 8 GB of RAM, so it's powerful enough for all your favourite games.", "https://media.currys.biz/i/currysprod/10224698?$l-large$&fmt=auto", 5, Category.LAPTOP);
        Product product2 = new Product("Alienware 5 M15 R7", 1699.00, "This RGB-lit Alienware gaming laptop boasts a lot of power and a swift screen perfect for even the most demanding games. All that is well cooled off by the high-performance Cryo-tech cooling.", "https://media.currys.biz/i/currysprod/10239349?$l-large$&fmt=auto", 5, Category.LAPTOP);
        Product product3 = new Product("HP Omen", 1599.99, "The HP OMEN Gaming Laptop has serious gaming power packed into a portable form. With a 11th generation Intel® Core™ i7 processor, there's power for everything you do.", "https://media.currys.biz/i/currysprod/10225990?$l-large$&fmt=auto", 5, Category.LAPTOP);
        Product product4 = new Product("MSI Creator Z16", 999.00, "Whether you're a photographer, graphic designer or animator, express yourself with the MSI Creator Z16 16 Gaming Laptop. Featuring a 11th generation i7 processor, RTX 3060 graphics card and Quad HD+ display, you can let your creative juices run wild.", "https://media.currys.biz/i/currysprod/10227063?$l-large$&fmt=auto", 5, Category.LAPTOP);

        Product product5 = new Product("LOGITECH G502 Hero", 39.99, "The Logitech G502 Hero Optical Gaming Mouse includes a responsive, advanced optical sensor that keeps you in complete control, so that you can avoid lagging in crucial moments when you're playing online.", "https://media.currys.biz/i/currysprod/10186039?$l-large$&fmt=auto", 5, Category.GAMINGMOUSE);
        Product product6 = new Product("Razer DeathAdder V2", 52.99, "The Razer DeathAdder V2 Optical Gaming Mouse has a super-fast response time, and 20,000 DPI. So, it can keep up with your deadly swipes, and help you land blows more precisely.", "https://media.currys.biz/i/currysprod/10204230?$l-large$&fmt=auto", 5, Category.GAMINGMOUSE);
        Product product7 = new Product("Corsair Harpoon RGB Pro", 19.99, "The Corsair HARPOON RGB Pro RGB Optical Gaming Mouse looks the part as well as being perfectly designed for gaming. It's got dynamic RGB LED lighting, with loads of colours and effects to choose from.", "https://media.currys.biz/i/currysprod/10194192?$l-large$&fmt=auto", 5, Category.GAMINGMOUSE);
        Product product8 = new Product("SteelSeries Aerox 5 RGB", 30.99, "Ultra-light at just 74 g combined with PTFE skates, this gaming mouse glides with pretty much no resistance\n", "https://media.currys.biz/i/currysprod/10236965?$l-large$&fmt=auto", 5, Category.GAMINGMOUSE);

        Product product9 = new Product("Nintendo Switch Pro", 309.99, "The Nintendo Switch is designed to go wherever you do. With the ability to transform between a home console and a portable system, the Switch lets you play your favourite games for longer.", "https://media.currys.biz/i/currysprod/M10160718_red?$l-large$&fmt=auto", 5, Category.GAMINGCONSOLE);
        Product product10 = new Product("Microsoft Xbox Series S", 249.00, "Experience a new generation of gaming at a lower price point with the Microsoft Xbox Series S.", "https://media.currys.biz/i/currysprod/10205195?$l-large$&fmt=auto", 5, Category.GAMINGCONSOLE);
        Product product11 = new Product("Sony Playstation 5 825GB", 449.00, "The Sony PlayStation 5 rewrites the rules of what a console can do. Combining a custom CPU, GPU and lightning fast SSD storage, it'll load up all your games almost instantly, no matter how expansive.\n", "https://media.currys.biz/i/currysprod/10203370?$l-large$&fmt=auto", 5, Category.GAMINGCONSOLE);
        Product product12 = new Product("Microsoft Xbox Series X", 449.00, "Experience a new generation of gaming with the Microsoft Xbox Series X.\n", "https://media.currys.biz/i/currysprod/10203371?$l-large$&fmt=auto", 5, Category.GAMINGCONSOLE);

        Product product13 = new Product("Razer Cynosa V2 Chroma", 49.99, "Personalise your gaming setup with the colourful Razer Cynosa V2 Chroma Gaming Keyboard. With individually backlit RGB keys you can tweak the lighting as much as you like, or choose a preset designed for a specific game.", "https://media.currys.biz/i/currysprod/10214878?$l-large$&fmt=auto", 5, Category.GAMINGKEYBOARD);
        Product product14 = new Product("SteelSeries APEX PRO TKL", 149.99, "The SteelSeries Apex Pro TKL 64739 Mechanical Gaming Keyboard has dynamic OmniPoint switches that can be tweaked to your liking. From featherlight touches to deliberate keypresses, you can adjust the sensitivity to fit your gaming style.", "https://media.currys.biz/i/currysprod/10193545?$l-large$&fmt=auto", 5, Category.GAMINGKEYBOARD);
        Product product15 = new Product("Corsair K70 RBK MK2", 119.00, "Featuring Cherry MX Red switches, the Corsair K70 RGB MK.2 Gaming Keyboard keeps you in control with fast and precise key presses. Every command is instantly registered, giving you a crucial advantage when the milliseconds count.", "https://media.currys.biz/i/currysprod/10183699?$l-large$&fmt=auto", 5, Category.GAMINGKEYBOARD);
        Product product16 = new Product("Logitech G213 Prodigy", 38.00, "The G213 Prodigy Gaming Keyboard features Mech-Dome keys which deliver an impressive tactile response that's similar to a mechanical keyboard.", "https://media.currys.biz/i/currysprod/10157805?$l-large$&fmt=auto", 5, Category.GAMINGKEYBOARD);

        Product product17 = new Product("Sony Playstation 5 Controller", 49.99, "The Sony DualSense Wireless Controller has an innovative new design so you can get the most out of your games.\n", "https://media.currys.biz/i/currysprod/10224963?$l-large$&fmt=auto", 5, Category.GAMINGCONTROLLER);
        Product product18 = new Product("Nintendo Switch Pro Controller", 64.99, "The Nintendo Switch Pro Controller gives you a more comfortable gaming experience when playing thanks to premium grips that feel great in your hands.", "https://media.currys.biz/i/currysprod/10160719?$l-large$&fmt=auto", 5, Category.GAMINGCONTROLLER);
        Product product19 = new Product("Microsoft Xbox Elite Series 2 Controller", 143.00, "Play like a pro with the Xbox Elite Series 2 Wireless Controller. Everyone plays differently, and now you've got the ability to adjust your controller in loads of different ways.\n", "https://media.currys.biz/i/currysprod/10195862?$l-large$&fmt=auto", 5, Category.GAMINGCONTROLLER);
        Product product20 = new Product("Microsoft Xbox Series S Wireless Controller", 59.99, "A new console deserves a stunning new controller - the Microsoft Xbox Wireless Controller is designed with better ergonomics and reduced latency.\n", "https://media.currys.biz/i/currysprod/10218483?$l-large$&fmt=auto", 5, Category.GAMINGCONTROLLER);

        Product product21 = new Product("Razer Kraken X", 31.00, "Stay one step ahead of your opponents with the Razer Kraken X Lite 7.1 Gaming Headset. With 7.1 surround sound, you'll hear exactly which direction your enemy is coming from.\n", "https://media.currys.biz/i/currysprod/10204897?$l-large$&fmt=auto", 5, Category.GAMINGHEADSET);
        Product product22 = new Product("TURTLE BEACH Recon 500 Gaming Headset", 64.99, "Re-imagine your gaming audio with the Turtle Beach Recon 500 Gaming Headset. It features the all-new patented dual drivers with separate chambers for low and high sound frequencies. That means excellent clarity and dynamics.\n", "https://media.currys.biz/i/currysprod/M10223649_black?$l-large$&fmt=auto", 5, Category.GAMINGHEADSET);
        Product product23 = new Product("Logitech G332", 29.99, "Get a more immersive gaming experience with the Logitech G332 Gaming Headset. With large 50 mm drivers, you'll get expansive sound to bring all your games to life, from the sound of an enemy jet overhead to a barrage of gunshot from behind.\n", "https://media.currys.biz/i/currysprod/10190226?$l-large$&fmt=auto", 5, Category.GAMINGHEADSET);
        Product product24 = new Product("Astro A50 Wireless 7.1", 229.00, "This headset connects to its base unit through your WiFi, so when you're playing your favourite games there won't be any wires getting in the way, tangling up or causing you any distractions.\n", "https://media.currys.biz/i/currysprod/M10197797_grey?$l-large$&fmt=auto", 5, Category.GAMINGHEADSET);

        Product product25 = new Product("Corsair T100 Rank", 149.00, "Get comfortable while working, gaming or just relaxing with the Corsair T100 Rank Gaming Chair. This fully adjustable chair will help you maintain healthy posture and relieve back pain while also looking great at your gaming station or desk.\n", "https://media.currys.biz/i/currysprod/10222473?$l-large$&fmt=auto", 5, Category.GAMINGCHAIR);
        Product product26 = new Product("Razer Tarok PRO", 219.00, "The Tarok PRO Gaming Chair features adjustable back, head and armrests meaning you can get in the position for gaming.", "https://media.currys.biz/i/currysprod/10214442?$l-large$&fmt=auto", 5, Category.GAMINGCHAIR);
        Product product27 = new Product("ADX Firebase Entry", 119.00, "Get comfy when gaming with the exclusive ADX Firebase Entry 21 Gaming Chair. It allows you to adjust the height and angle so you'll have the optimal position to enjoy those long gaming sessions without backpain.\n", "https://media.currys.biz/i/currysprod/10191746?$l-large$&fmt=auto", 5, Category.GAMINGCHAIR);
        Product product28 = new Product("NOBLECHAIRS Hero TX", 219.00, "Its fleece backing and breathable fabric is comfortable and durable, so it's perfect for long gaming sessions.\n", "https://media.currys.biz/i/currysprod/10235690?$l-large$&fmt=auto", 5, Category.GAMINGCHAIR);
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
        Customer customer1 = new Customer("Sarah123", "Cakebakefake!340", "SarahJane123@gmail.com", "Sarah Jane", "123 Summer Avenue, London");
        Customer customer2 = new Customer("Bailey_B", "ajdogenwof.34/", "Bailey.Buntin@gmail.com", "Bailey Buntin", "88 Griffen Avenue, Birmingham");
        Customer customer3 = new Customer("CAllen2", "hghghghj786@@0", "Craig_Allen@yahoo.com", "Craig Allen", "9 Green Lane, Glasgow");

        customerRepository.saveAll(Arrays.asList(customer1, customer2, customer3));

        // ADD ADMINS
        Admin admin1 = new Admin("Mark_Dupree", "MD@66.54321", "Mark_Dupree@icloud.com", 1);
        Admin admin2 = new Admin("Ashley_A", "Admin_123_jv", "Ashley_A@hotmail.co.uk", 2);
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
        Order order2 = new Order(LocalDate.of(2022, 5, 5), Arrays.asList(product5, product6, product15), customer3);
        Order order3 = new Order(LocalDate.of(2022, 3, 26), Arrays.asList(product11, product7, product21, product18, product25), customer2);
        Order order4 = new Order(LocalDate.of(2022, 1, 28), Arrays.asList(product1, product28), customer2);
        Order order5 = new Order(LocalDate.of(2022, 2, 12), Arrays.asList(product23, product24), customer1);
        orderRepository.saveAll(Arrays.asList(order1, order2, order3, order4, order5));
    }

}
