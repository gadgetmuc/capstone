<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201204221026 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE shopping_lists (id INT AUTO_INCREMENT NOT NULL, article_id_id INT NOT NULL, user_id_id INT NOT NULL, listname VARCHAR(255) NOT NULL, shoppinglistid INT NOT NULL, amount INT NOT NULL, INDEX IDX_984E7FF8F3EC46 (article_id_id), INDEX IDX_984E7FF9D86650F (user_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE shopping_lists ADD CONSTRAINT FK_984E7FF8F3EC46 FOREIGN KEY (article_id_id) REFERENCES articles (id)');
        $this->addSql('ALTER TABLE shopping_lists ADD CONSTRAINT FK_984E7FF9D86650F FOREIGN KEY (user_id_id) REFERENCES user_data (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE shopping_lists');
    }
}
