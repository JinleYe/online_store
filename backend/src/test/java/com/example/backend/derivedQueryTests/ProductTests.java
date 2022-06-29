package com.example.backend.derivedQueryTests;

import com.example.backend.models.Category;
import com.example.backend.models.Product;
import com.example.backend.repositories.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class ProductTests {

    @Autowired
    ProductRepository productRepository;

    @Test
    void contextLoads() {}


    @Test
    public void findAllProductsWithTitleContainingAcer(){
        List<Product> found = productRepository.findProductByTitleContainingIgnoreCase("Acer");
        assertThat(found.size()).isEqualTo(1);
    }

    @Test
    public void findAllProductsWithTitleContainingMicrosoft(){
        List<Product> found = productRepository.findProductByTitleContainingIgnoreCase("MicroSOft");
        assertThat(found.size()).isEqualTo(4);
    }

    @Test
    public void findAllProductsWithTitleContainingNintendo(){
        List<Product> found = productRepository.findProductByTitleContainingIgnoreCase("NiNTENdo");
        assertThat(found.size()).isEqualTo(3);
    }

    @Test
    public void findAllProductsWithTitleContainingPlaystation(){
        List<Product> found = productRepository.findProductByTitleContainingIgnoreCase("PLAYstation");
        assertThat(found.size()).isEqualTo(2);
    }

    @Test
    public void findAllProductsWithDescriptionLoremIpsum(){
        List<Product> found = productRepository.findProductByDescriptionContainingIgnoreCase("lorem ipsum");
        assertThat(found.size()).isEqualTo(28);
    }

    @Test
    public void findProductsCheaperThan600(){
        List<Product> found = productRepository.findProductByPriceLessThan(600.00);
        assertThat(found.size()).isEqualTo(24);
    }

    @Test
    public void findProductsCheaperThan1000(){
        List<Product> found = productRepository.findProductByPriceLessThan(1000.00);
        assertThat(found.size()).isEqualTo(26);
    }

    @Test
    public void findProductsCheaperThan200(){
        List<Product> found = productRepository.findProductByPriceLessThan(200.00);
        assertThat(found.size()).isEqualTo(17);
    }

    @Test
    public void findProductsCheaperThan500(){
        List<Product> found = productRepository.findProductByPriceLessThan(500.00);
        assertThat(found.size()).isEqualTo(24);
    }

    @Test
    public void findAllProductsWithCategoryLaptop(){
        List<Product> found = productRepository.findProductByCategory(Category.LAPTOP);
        assertThat(found.size()).isEqualTo(4);
    }

    @Test
    public void findAllProductsWithCategoryGamingController(){
        List<Product> found = productRepository.findProductByCategory(Category.GAMINGCONTROLLER);
        assertThat(found.size()).isEqualTo(4);
    }

    @Test
    public void findAllProductsWithCategoryGamingMouse(){
        List<Product> found = productRepository.findProductByCategory(Category.GAMINGMOUSE);
        assertThat(found.size()).isEqualTo(4);
    }

    @Test
    public void findAllProductsWithCategoryGamingConsole(){
        List<Product> found = productRepository.findProductByCategory(Category.GAMINGCONSOLE);
        assertThat(found.size()).isEqualTo(4);
    }

    @Test
    public void findAllProductsWithCategoryGamingKeyboard(){
        List<Product> found = productRepository.findProductByCategory(Category.GAMINGKEYBOARD);
        assertThat(found.size()).isEqualTo(4);
    }

    @Test
    public void findAllProductsWithCategoryGamingHeadset(){
        List<Product> found = productRepository.findProductByCategory(Category.GAMINGHEADSET);
        assertThat(found.size()).isEqualTo(4);
    }

    @Test
    public void findAllProductsWithCategoryGamingChair(){
        List<Product> found = productRepository.findProductByCategory(Category.GAMINGCHAIR);
        assertThat(found.size()).isEqualTo(4);
    }
}