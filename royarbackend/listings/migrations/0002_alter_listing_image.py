# Generated by Django 3.2.5 on 2021-07-16 22:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='image',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]